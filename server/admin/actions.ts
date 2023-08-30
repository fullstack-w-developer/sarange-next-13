"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getPermissionsSidebar = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsSidebar}${decodeCode.userId}`, {
            headers: {
                "x-Access-Token": token!,
            },
        });
        const permissions = await data.json();

        return permissions;
    }
};

export const getReferences = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.resource.all}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["all-referances"],
            },
        });
        const reference = await data.json();
        return reference;
    }
};

export const deleteReferanceAction = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.resource.delete}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "DELETE",
        });
        const deleteUser = await data.json();
        revalidateTag("all-referances");
        return deleteUser;
    }
};

export const addReferanceAction = async (formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.resource.add}`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("all-referances");
        return result;
    }
};
export const editReferanceAction = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.resource.edit}/${id}`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("all-referances");
        return result;
    }
};
export const getAllAttribute = async (id: string, q?: string, skip?: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(
            `${mainUrl}/ac/resources/${id}/attributes?${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}&limit=10`,
            {
                headers: {
                    "x-Access-Token": token!,
                    "Content-Type": "application/json",
                },
                method: "GET",
                next: {
                    tags: ["all-attributes"],
                },
            },
        );
        const result = await data.json();
        return result;
    }
};

export const deleteAttributeAction = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.attribute.delete}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "DELETE",
        });
        const deleteAttribute = await data.json();
        revalidateTag("all-attributes");

        return deleteAttribute;
    }
};
export const addAttributeAction = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.attribute.add}/${id}/attributes`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });
        const Attribute = await data.json();
        revalidateTag("all-attributes");

        return Attribute;
    }
};

export const editAttributeAction = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.attribute.edit}/${id}`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        });
        const Attribute = await data.json();
        revalidateTag("all-attributes");

        return Attribute;
    }
};

export const getAllPermissions = async (q?: string, skip?: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}/ac/allPermissions?${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}&limit=10`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "GET",
            next: {
                tags: ["all-permissions"],
            },
        });
        const result = await data.json();
        return result;
    }
};

export const deletePermisstionAction = async (id: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.permission.delete}/${id}`, {
            headers: {
                "x-Access-Token": token!,
            },
            method: "DELETE",
        });
        const deletePermissions = await data.json();
        revalidateTag("all-permissions");

        return deletePermissions;
    }
};

export const addPermessionAction = async (formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.permission.add}`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(formData),
        });
        const Attribute = await data.json();
        revalidateTag("all-permissions");

        return Attribute;
    }
};

export const editPermessionAction = async (id: string, formData: any) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.permission.edit}/${id}`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("all-permissions");

        return result;
    }
};
