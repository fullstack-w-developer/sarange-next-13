// "use server";
// import jwt_decode from "jwt-decode";
// import { mainUrl } from "@/helper/constants/env-variables";
// import route from "@/helper/routes/apiRoutes";
// import { cookies } from "next/headers";
// import { revalidateTag } from "next/cache";

// export const getRoutesListAdmin = async (q: string, skip: string) => {
//     const cookieStore = cookies();
//     const token = cookieStore.get("token")?.value;
//     if (token) {
//         const data: any = await fetch(`${mainUrl}${route.admin.routes}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
//             headers: {
//                 "x-access-token": token!,
//             },
//             next: {
//                 tags: ["route-list"],
//             },
//         });
//         const result = await data.json();
//         return result;
//     }
// };

// export const getPermissionsRoute = async () => {
//     const cookieStore = cookies();
//     const token = cookieStore.get("token")?.value;
//     if (token) {
//         const decodeCode: any = jwt_decode(token);
//         const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsRoute}${decodeCode.userId}`, {
//             headers: {
//                 "x-access-token": token!,
//             },
//         });
//         const permissions = await data.json();
//         return permissions;
//     }
// };

// export const getRoutesWithPermissions = async (q: string, skip: string) => {
//     const [data, permisstion] = await Promise.all([getRoutesListAdmin(q, skip), getPermissionsRoute()]);
//     const filteredUsers = data.Routes.map((user: any) => {
//         const attributes = permisstion.flatMap((item: any) => item.Attributes).map((attribute: any) => attribute.Value);
//         const filteredUser: any = {};

//         attributes.forEach((attr: string) => {
//             filteredUser[attr] = user[attr];
//         });

//         return filteredUser;
//     });
//     const flatMappedAttributes = permisstion.flatMap((item: any) => item.Attributes);
//     // @ts-ignore
//     const Headers = Array.from(new Set(flatMappedAttributes.map(JSON.stringify))).map(JSON.parse);
//     const check = permisstion.filter((item: any) => item.Action !== "مشاهده");

//     return {
//         data: filteredUsers,
//         Total: data.Total,
//         Headers: check.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
//         operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
//     };
// };

// export const getTransactionsListWithPermissions = async (q: string, skip: string) => {
//     const [data, permisstion] = await Promise.all([getTransactionsListAdmin(q, skip), getPermissionsTransactions()]);

//     const headerItems: any = []
//     const dataTable: any = []
//     for (let i = 0; i < data.Transactions.length; i++) {
//         for (let j = 0; j < permisstion[0].Attributes.length; j++) {
//             headerItems.push({ Name: permisstion[0].Attributes[j].Name })
//         }
//         dataTable.push(data.Transactions[i])
//     }
//     //@ts-ignore
//     const Headers = Array.from(new Set(headerItems.map(JSON.stringify))).map(JSON.parse);

//     return {
//         Transactions: dataTable,
//         Total: dataTable.Total,
//         Headers: Headers,
//     };
// };

"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getList = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.routes}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
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
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsRoute}${decodeCode.userId}`, {
            headers: {
                "x-access-token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};

export const getRoutesWithPermissions = async (q: string, skip: string) => {
    const [data, permisstion] = await Promise.all([getList(q, skip), getPermissions()]);
    const headerItems: any = [];
    const dataTable: any = [];
    for (let i = 0; i < data.Routes?.length; i++) {
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
        dataTable.push({ ...data.Routes[i], id: i + 1 });
    }
    // @ts-ignore
    const Headers = Array.from(new Set(headerItems.map(JSON.stringify))).map(JSON.parse);
    const check = permisstion.filter((item: any) => item.Action !== "مشاهده");

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

export const addRouteAction = async (formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.route.add}`, {
            headers: {
                "x-access-token": token!,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("route-list");

        return result;
    }
};

export const editRouteAction = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.route.edit}/${id}`, {
            headers: {
                "x-access-token": token!,
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("route-list");
        return result;
    }
};

export const deleteRouteAction = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.route.delete}/${id}`, {
            headers: {
                "x-access-token": token!,
            },
            method: "DELETE",
        });
        const deleteFun = await data.json();
        revalidateTag("route-list");
        return deleteFun;
    }
};
