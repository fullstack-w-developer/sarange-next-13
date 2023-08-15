"use server";
import jwt_decode from "jwt-decode";
import { mainUrl } from "@/helper/constants/env-variables";
import route from "@/helper/routes/apiRoutes";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getTransactionsListAdmin = async (q: string, skip: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}${route.admin.transactions}${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}`, {
            headers: {
                "x-Access-Token": token!,
            },
            next: {
                tags: ["transaction-list"],
            },
        });
        const result = await data.json();
        return result;
    }
};
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
export const getPermissionsTransactions = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const decodeCode: any = jwt_decode(token);
        const data: any = await fetch(`${mainUrl}${route.admin.get_permissionsTransactions}${decodeCode.userId}`, {
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

export const getTransactionsListWithPermissions = async (q: string, skip: string) => {
    const [transactions, permisstion] = await Promise.all([getTransactionsListAdmin(q, skip), getPermissionsTransactions()]);
    console.log(JSON.stringify(transactions), "transactions")
    console.log(JSON.stringify(permisstion), "permisstion")
    const filteredTransactions = transactions.Transactions.map((user: any) => {
        const attributes = permisstion
          .flatMap((item: any) => item.Attributes)
          .map((attribute: any) => attribute.Value);
        const filteredTransactions: any = {};
        attributes.forEach((attr: any) => {
          filteredTransactions[attr] = user[attr];
        });
      
        return filteredTransactions;
      });

      
    const Headers = permisstion.filter((item: any) => item.Action !== "مشاهده").flatMap((item: any) => item.Attributes);

    return {
        Transactions: filteredTransactions,
        Total: transactions.Total,
        Headers: Headers.length > 1 ? [...Headers, { Name: "عملیات" }] : Headers,
        operation: permisstion.filter((permisstion: any) => permisstion.Action !== "مشاهده"),
    };
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
                "Content-Type": 'application/json'
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
                "Content-Type": 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(formData),
        });
        const result = await data.json();
        revalidateTag("all-referances");
        return result;
    }
};
export const getAllAttribute = async (id: string, name: string, q?: string, skip?: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;
    if (token) {
        const data: any = await fetch(`${mainUrl}/ac/resources/${id}/attributes?${q ? `&q=${q}` : ""}&skip=${skip ?? "0"}&limit=10`, {
            headers: {
                "x-Access-Token": token!,
                "Content-Type": 'application/json'
            },
            method: "GET",
            next: {
                tags: ["all-attributes"]
            }
        });
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
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
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
                "Content-Type": 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(formData)
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
                "Content-Type": 'application/json'
            },
            method: "GET",
            next: {
                tags: ["all-permissions"]
            }
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
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(formData)
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
                "Content-Type": 'application/json'
            },
            method: "PATCH",
            body: JSON.stringify(formData)
        });
        const result = await data.json();
        revalidateTag("all-permissions");

        return result;
    }
};