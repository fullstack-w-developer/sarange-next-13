"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getUserListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.users}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["user-list"],
            },
        });
        const users = await data.json();
        return users;
    }
};
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
export const getContersListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.counters}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["user-list"],
            },
        });
        const users = await data.json();
        return users;
    }
};
export const getPermissionsUsers = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsUsers}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
    }
};
export const getPermissionsCounters = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsCounter}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();
        return permissions;
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

export const getUserListWithPermissions = async (q: string, skip: string) => {
    const [users, permisstion] = await Promise.all([getUserListAdmin(q, skip), getPermissionsUsers()]);
    const filteredUsers = users.Users.map((user: any) => {
        const attributes = permisstion
            .filter((item: any) => item.Action !== "مشاهده")
            .flatMap((item: any) => item.Attributes)
            .map((attribute: any) => attribute.Value);
        const filteredUser: any = {};

        attributes.forEach((attr: string) => {
            filteredUser[attr] = user[attr];
        });

        return filteredUser;
    });

    const Headers = permisstion.filter((item: any) => item.Action === "مشاهده").flatMap((item: any) => item.Attributes);

    return {
        Users: filteredUsers,
        Total: users.Total,
        Headers: Headers.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
    };
};
export const getDriversListWithPermissions = async (q: string, skip: string) => {
    const [drivers, permisstion] = await Promise.all([getDriversListAdmin(q, skip), getPermissionsDrivers()]);
    const filteredUsers = drivers.drivers.map((user: any) => {
        const attributes = permisstion
            .filter((item: any) => item.Action === "مشاهده")
            .flatMap((item: any) => item.Attributes)
            .map((attribute: any) => attribute.Value);
        const filteredUser: any = {};

        attributes.forEach((attr: string) => {
            filteredUser[attr] = user[attr];
        });

        return filteredUser;
    });

    const Headers = permisstion.filter((item: any) => item.Action !== "مشاهده").flatMap((item: any) => item.Attributes);

    return {
        Users: filteredUsers,
        Total: drivers.Total,
        Headers: Headers.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
    };
};
export const getCountersListWithPermissions = async (q: string, skip: string) => {
    const [counters, permisstion] = await Promise.all([getContersListAdmin(q, skip), getPermissionsCounters()]);
    const filteredUsers = counters.counters.map((user: any) => {
        const attributes = permisstion
            .filter((item: any) => item.Action === "مشاهده")
            .flatMap((item: any) => item.Attributes)
            .map((attribute: any) => attribute.Value);
        const filteredUser: any = {};

        attributes.forEach((attr: string) => {
            filteredUser[attr] = user[attr];
        });

        return filteredUser;
    });

    const Headers = permisstion.filter((item: any) => item.Action !== "مشاهده").flatMap((item: any) => item.Attributes);

    return {
        Users: filteredUsers,
        Total: counters.Total,
        Headers: Headers.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
    };
};

export const deleteUserByAdmin = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.deleteUser}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "DELETE",
        });
        const deleteUser = await data.json();
        revalidateTag("user-list");
        return deleteUser;
    }
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

export const actionEditUserByAdmin = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.editUser}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            body: JSON.stringify(formData!),
            method: "PATCH",
        });
        const editUser = await data.json();
        revalidateTag("user-list");
        return editUser;
    }
};

export const getReferences = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.resource}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const reference = await data.json();
        return reference;
    }
};
