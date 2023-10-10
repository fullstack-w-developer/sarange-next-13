"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { revalidateTag } from "next/cache";
import { sendRenderResult } from "next/dist/server/send-payload";
import { cookies } from "next/headers";
import { sendRequest } from "../fetch";
import { Transaction } from "@/types/User";


export const getUnreadNotifications = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.notfication.unread}`, {
            next: {
                tags: ["notifications"],
            },
            headers: {
                "x-access-token": token!,
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
                "x-access-token": token!,
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
                "x-access-token": token!,
            },
            method: "POST",
        });
        const result = await data.json();
        revalidateTag("notifications");
        return result;
    }
};
