"use server";
import jwt_decode from 'jwt-decode';
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";


export const getUserListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.users}${q ? `&q=${q}` : ''}&skip=${skip  ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const users = await data.json();
        return users;
    }
};
export const getPermissions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissions}/${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
}



export const getUserListWithPermissions = async (q: string, skip: string) => {
   const [users] = await Promise.all([getUserListAdmin(q, skip)])
          return users
}