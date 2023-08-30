"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getTrasactions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.my_transactions}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const transaction = await data.json();
        return transaction;
    }
};
export const getUnreadNotifications = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.notfication.unread}`, {
            next: {
                tags: ["notifications"],
            },
            headers: {
                "x-Access-Token": token!,
            },
        });
        const result = await data.json();
        return result;
    }
};
export const getAllNotifications = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.notfication.all}`, {
            next: {
                tags: ["notifications"],
            },
            headers: {
                "x-Access-Token": token!,
            },
        });
        const result = await data.json();
        return result;
    }
};
export const readAllNotifications = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.notfication.readall}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "POST",
        });
        const result = await data.json();
        revalidateTag("notifications");
        return result;
    }
};
