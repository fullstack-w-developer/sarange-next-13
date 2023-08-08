"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import axios from "@/services/utils/axios";
import { cookies } from "next/headers";

export const getUserInfoBySerialCardCounter = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.counter.user_userInfo_by_cardId}/${id}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const userInfo = await data.json();
        return userInfo;
    }
};

export const getBalanceByCounter = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.counter.get_balance_by_counter}/${id}/balance`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const userInfo = await data.json();
        return userInfo;
    }
};
export const getCounter = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.counter.me}`, {
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const user = await data.json();
        return { ...user.Owner, Balance: user.Balance, Address: user.Address, Name: user.Name };
    }
};
