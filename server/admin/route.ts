"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getRoutesListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.routes}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["route-list"],
            },
        });
        const result = await data.json();
        return result;
    }
};

export const getPermissionsRoute = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsRoute}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};

export const getRoutesWithPermissions = async (q: string, skip: string) => {
    const [data, permisstion] = await Promise.all([getRoutesListAdmin(q, skip), getPermissionsRoute()]);
    const filteredUsers = data.Routes.map((user: any) => {
        const attributes = permisstion.flatMap((item: any) => item.Attributes).map((attribute: any) => attribute.Value);
        const filteredUser: any = {};

        attributes.forEach((attr: string) => {
            filteredUser[attr] = user[attr];
        });

        return filteredUser;
    });
    const flatMappedAttributes = permisstion.flatMap((item: any) => item.Attributes);
    // @ts-ignore
    const Headers = Array.from(new Set(flatMappedAttributes.map(JSON.stringify))).map(JSON.parse);
    const check = permisstion.filter((item: any) => item.Action !== "مشاهده");

    return {
        data: filteredUsers,
        Total: data.Total,
        Headers: check.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
    };
};





export const deleteRouteAction = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token){
        const data: any = await fetch(`${mainUrl}${route.admin.route.delete}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "DELETE",
        });
        const deleteFun = await data.json();
        revalidateTag("route-list");
        return deleteFun;
    }
};




export const addRouteAction = async (formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.route.add}`, {
            headers: {
                "x-Access-Token": token!,
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
                "x-Access-Token": token!,
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