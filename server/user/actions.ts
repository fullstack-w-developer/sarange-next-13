"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import axios from "@/services/utils/axios";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const getUser = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
        const data: any = await fetch(`${mainUrl}${route.user.me}`, {
            cache: "no-store",
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
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const trip = await data.json();
        return trip;
    }
}
export const getCards = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.my_cards}`, {
            next: {
                tags: ["cards"],
            },
            cache: "no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const cards = await data.json();
        return cards;
    }
};

export const deActiveCard = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.deActiveCard}/${id}/status`, {
            method: "PATCH",
            headers: {
                "x-Access-Token": token!,
            },
        });
        revalidateTag("cards");
    }
};

export const getDetaisUserBySerialCard = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.user.getDetilsByCard}/${id}`, {
            next: {
                tags: ["cards"],
            },
            cache:"no-store",
            headers: {
                "x-Access-Token": token!,
            },
        });
        const deatils = await data.json();
        return deatils[0];
    }
};
