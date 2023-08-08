"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getUserListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.users}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next:{
                tags:["user-list"]
            }
        });
        const users = await data.json();
        return users;
    }
};
export const getPermissions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissions}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};



export const getUserListWithPermissions = async (q: string, skip: string) => {
    const [users, permisstion] = await Promise.all([getUserListAdmin(q, skip), getPermissions()]);
    //   console.log(permisstion[0].)
    const filteredUsers = users.Users.map((user: any) => {
        const attributes = permisstion
            .filter((item: any) => item.Action === "مشاهده")
            .flatMap((item: any) => item.Attributes)
            .map((attribute: any) => attribute.Value);
        const filteredUser: any = {};

        attributes.forEach((attr: string) => {
            filteredUser[attr] = user[attr];
        });

        return filteredUser;
    });



    const Headers = permisstion
        .filter((item: any) => item.Action === "مشاهده")
        .flatMap((item: any) => item.Attributes)

    return {
        Users: filteredUsers,
        Total: users.Total,
        Headers: Headers.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده")
    };
};



export const deleteUserByAdmin = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.deleteUser}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            
            },
            method:"DELETE"
        });
        const deleteUser = await data.json();
        revalidateTag("user-list")
        return deleteUser;
    }
};


export const actionEditUserByAdmin = async (id: string,formData:any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.editUser}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            
            },
            body: JSON.stringify(formData!),
            method:"PATCH"
        });
        const editUser = await data.json();
        revalidateTag("user-list")
        return editUser;
    }
};