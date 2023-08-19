"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";



export const getDriversListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.drivers}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["driver-list"],
            },
        });
        const users = await data.json();
        return users;
    }
};




export const getPermissionsDrivers = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionDrivers}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};




export const getDriversListWithPermissions = async (q: string, skip: string) => {
    const [drivers, permisstion] = await Promise.all([getDriversListAdmin(q, skip), getPermissionsDrivers()]);
    const filteredDriver = drivers.drivers.map((user: any) => {
        const attributes = permisstion
            .filter((item: any) => item.Action === "مشاهده")
            .flatMap((item: any) => item.Attributes)
            .map((attribute: any) => attribute.Value);
        const filteredDriver: any = {};

        attributes.forEach((attr: string) => {
            filteredDriver[attr] = user[attr];
        });

        return filteredDriver;
    });

    const flatMappedAttributes = permisstion.flatMap((item: any) => item.Attributes);
    // @ts-ignore
    const Headers = Array.from(new Set(flatMappedAttributes.map(JSON.stringify))).map(JSON.parse);
    const check = permisstion.filter((item: any) => item.Action !== "مشاهده");

    return {
        data: filteredDriver,
        Total: drivers.Total,
        Headers: check.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
    };
};








export const deleteDriverByAdmin = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.deleteDriver}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "DELETE",
        });
        const deleteUser = await data.json();
        revalidateTag("driver-list");
        return deleteUser;
    }
};