"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { GridValueGetterParams } from "@mui/x-data-grid";
import { sendRequest } from "../fetch";

export const getUserListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.users}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-access-token": token!,
            },
            next: {
                tags: ["user-list"],
            },
        });
        const users = await data.json();
        return users;
    }
};

export const getPermissionsUsers = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        // @ts-ignore
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsUsers}${decodeCode.userId}`, {
            headers: {
                "x-access-token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};

export const getUserListWithPermissions = async (q: string, skip: string) => {
    const [data, permisstion] = await Promise.all([getUserListAdmin(q, skip), getPermissionsUsers()]);
    const headerItems: any = [];
    const dataTable: any = [];
    for (let i = 0; i < data.Users?.length; i++) {
        for (let j = 0; j < permisstion[0].Attributes?.length; j++) {
            if (permisstion[0].Attributes[j].Name === "آیدی") continue;
            if (permisstion[0].Attributes[j].Name === "AuthId") continue;
            headerItems.push({
                headerName: permisstion[0].Attributes[j].Name,
                field: permisstion[0].Attributes[j].Value,
                flex: 1,
                align: "center",
                justifyContent: "center",
                headerClassName: "font-artin-bold",
            });
        }
        dataTable.push({ ...data.Users[i], id: i + 1 });
    }
    // @ts-ignore
    const Headers = Array.from(new Set(headerItems.map(JSON.stringify))).map(JSON.parse);
    const check = permisstion.filter((item: any) => item.Action !== "مشاهده");

    return {
        data: dataTable,
        Total: data.Total,
        Headers:
            check?.length >= 1
                ? [{ headerName: "ردیف", field: "id", flex: 1, align: "center", headerClassName: "font-artin-bold" }, ...Headers]
                : [{ headerName: "ردیف", field: "id" }, ...Headers],
        operation: {
            Total: check.length,
            create: permisstion.find((item: any) => item.Action === "ایجاد")?.Attributes,
            edit: permisstion.find((item: any) => item.Action == "ویرایش")?.Attributes,
            names: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده").flatMap((item: any) => item.Action),
        },
    };
};

export const deleteUserByAdmin = async (id: string) => {
    const response =  await sendRequest({ method: "DELETE", endpoint: `${route.admin.deleteUser}/${id}`});
    if(response.status){
        revalidateTag("user-list")
    }
    return response
};
export const editUserByAdmin = async (id: string,body:any) => {
    const response =  await sendRequest({ method: "PATCH", body, endpoint: `${route.admin.editUser}/${id}`});
    if(response.status){
        revalidateTag("user-list")
    }
    return response
};




// export const editUserByAdmin = async (id: string, formData: any) => {
//     const cookieStore = cookies();
//     const token = cookieStore.get("token")?.value;
//     if (token) {
//         const data: any = await fetch(`${mainUrl}${route.admin.editUser}/${id}`, {
//             headers: {
//                 "x-access-token": token!,
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData!),
//             method: "PATCH",
//         });
//         const editUser = await data.json();
//         revalidateTag("user-list");
//         return editUser;
//     }
// };
