// "use server";
// import { jwtDecode } from "jwt-decode";// import { mainUrl } from "@/helper/constants/env-variables";
// import route from "@/helper/routes/apiRoutes";
// import { cookies } from "next/headers";
// import { revalidateTag } from "next/cache";

// export const getCardsListAdmin = async (q: string, skip: string) => {
//     const cookieStore = cookies();
//     const token = cookieStore.get("token")?.value;
//     if (token) {
//         const data: any = await fetch(`${mainUrl}${route.admin.cards}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
//             headers: {
//                 "x-access-token": token!,
//             },
//             next: {
//                 tags: ["card-list"],
//             },
//         });
//         const users = await data.json();
//         return users;
//     }
// };

// export const getPermissionsCards = async () => {
//     const cookieStore = cookies();
//     const token = cookieStore.get("token")?.value;
//     if (token) {
//         const decodeCode: any = jwtDecode(token);
//         const data: any = await fetch(`${mainUrl}${route.admin.get_permissionCards}${decodeCode.userId}`, {
//             headers: {
//                 "x-access-token": token!,
//             },
//         });
//         const permissions = await data.json();
//         return permissions;
//     }
// };

// export const getCardsListWithPermissions = async (q: string, skip: string) => {
//     const [data, permisstion] = await Promise.all([getCardsListAdmin(q, skip), getPermissionsCards()]);
//     const headerItems: any = []
//     const dataTable: any = []
//     for (let i = 0; i < data.Cards.length; i++) {
//         for (let j = 0; j < permisstion[0].Attributes.length; j++) {
//             headerItems.push({ Name: permisstion[0].Attributes[j].Name })
//         }
//         dataTable.push(data.Cards[i])
//     }
//     // @ts-ignore
//     const Headers = Array.from(new Set(headerItems.map(JSON.stringify))).map(JSON.parse);
//     const check = permisstion.filter((item: any) => item.Action !== "مشاهده");

//     return {
//         data: dataTable,
//         Total: data.Total,
//         Headers: check.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
//         operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
//     }
// };

"use server";
import { jwtDecode } from "jwt-decode";import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getList = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.cards}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-access-token": token!,
            },
            next: {
                tags: ["driver-list"],
            },
        });
        const result = await data.json();
        return result;
    }
};

export const getPermissions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        // @ts-ignore
        const decodeCode: any = jwtDecode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionCards}${decodeCode.userId}`, {
            headers: {
                "x-access-token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};

export const getCardsListWithPermissions = async (q: string, skip: string) => {
    const [data, permisstion] = await Promise.all([getList(q, skip), getPermissions()]);
    const headerItems: any = [];
    const dataTable: any = [];
    for (let i = 0; i < data.Cards?.length; i++) {
        for (let j = 0; j < permisstion[0].Attributes?.length; j++) {
            if (permisstion[0].Attributes[j].Name === "آیدی") continue;
            headerItems.push({
                headerName: permisstion[0].Attributes[j].Name,
                field: permisstion[0].Attributes[j].Value,
                flex: 1,
                align: "center",
                justifyContent: "center",
                headerClassName: "font-artin-bold",
            });
        }
        dataTable.push({ ...data.Cards[i], id: i + 1 });
    }
    // @ts-ignore
    const Headers = Array.from(new Set(headerItems.map(JSON.stringify))).map(JSON.parse);
    const check = permisstion?.filter((item: any) => item.Action !== "مشاهده");

    return {
        data: dataTable,
        Total: data.Total,
        Headers:
            check?.length >= 1
                ? [
                      {
                          headerName: "ردیف",
                          field: "id",
                          flex: 1,
                          align: "center",
                          justifyContent: "center",
                          headerClassName: "font-artin-bold",
                      },
                      ...Headers,
                  ]
                : [
                      {
                          headerName: "ردیف",
                          field: "id",
                          flex: 1,
                          align: "center",
                          justifyContent: "center",
                          headerClassName: "font-artin-bold",
                      },
                      ...Headers,
                  ],
        operation: {
            Total: check.length,
            create: permisstion.find((item: any) => item.Action === "ایجاد")?.Attributes,
            edit: permisstion.find((item: any) => item.Action == "ویرایش")?.Attributes,
            names: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده").flatMap((item: any) => item.Action),
        },
    };
};

export const addCardAction = async (formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.card.add}`, {
            headers: {
                "x-access-token": token!,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("card-list");

        return result;
    }
};

export const editCardAction = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.card.edit}/${id}`, {
            headers: {
                "x-access-token": token!,
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("card-list");
        return result;
    }
};

export const deleteCardAction = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.card.delete}/${id}`, {
            headers: {
                "x-access-token": token!,
            },
            method: "DELETE",
        });
        const deleteFun = await data.json();
        revalidateTag("card-list");
        return deleteFun;
    }
};
