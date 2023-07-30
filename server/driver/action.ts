"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import axios from "@/services/utils/axios";
import { cookies } from "next/headers";

export const getDriver = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.driver.me}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const userDriver = await data.json();
        return userDriver;
    }
};
export const getUserInfoBySerialCard = async (id:string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.driver.user_userInfo_by_cardId}/${id}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const userInfo = await data.json();
        return userInfo;
    }
};
export const getUserInfoByPhone = async (phone:string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.driver.get_userInfo_by_phone}/0${phone}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const userInfo = await data.json();
        return userInfo;
    }
};
export const getHistoryCheckoutDriver = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.driver.history_request_checkout}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const history = await data.json();
        return history;
    }
};
