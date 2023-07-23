"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes"
import axios from "@/services/utils/axios";
import { cookies } from "next/headers";

export const getUser = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.user.me}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const user = await data.json();
        return user;
    }
};
export const getInquiry = async (code: number) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.driver.getDriverByCityNumber}/${code}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const driver = await data.json();
        return driver;
    }
};
export const getTrip = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.trip}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const trip = await data.json();
        return trip;
    }
};
export const getTrasactions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.my_transactions}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const transaction = await data.json();
        return transaction;
    }
};
export const getCards = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.my_cards}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const cards = await data.json();
        return cards;
    }
};
