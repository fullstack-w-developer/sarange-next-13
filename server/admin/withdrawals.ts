"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getwithdrawalsListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.withdrawals}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["withdrawals-list"],
            },
        });
        const result = await data.json();
        return result;
    }
};

export const getPermissionswithdrawals = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsWithdrawals}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};

export const getWithdrawalsPermissions = async (q: string, skip: string) => {
    const [data, permisstion] = await Promise.all([getwithdrawalsListAdmin(q, skip), getPermissionswithdrawals()]);
    const filteredUsers = data.Requests.map((user: any) => {
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

