"use server";

import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
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
