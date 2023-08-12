import { getRoute } from "@/helper/utils/services";
import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { User } from "@/types/User";

export const createRole = async (data: any) => {
    const url = getRoute({ route: `${routes.admin.permission.craeteRole}` });
    return await client<string>({ url, method: "POST", data });
};
export const deleteRole = async (id: string) => {
    const url = getRoute({ route: `${routes.admin.permission.deleteRole}/${id}` });
    return await client<string>({ url, method: "DELETE" });
};
export const createAction = async (data: any) => {
    const url = getRoute({ route: `${routes.admin.permission.craeteAction}` });
    return await client<string>({ url, method: "POST", data });
};
export const editRole = async (data: any) => {
    const url = getRoute({ route: `${routes.admin.permission.editRole}/${data.id}` });
    return await client<string>({ url, method: "PATcH", data });
};
export const editAction = async (data: any) => {
    const url = getRoute({ route: `${routes.admin.permission.action}/${data.id}` });
    return await client<string>({ url, method: "PATcH", data });
};
export const assignmentUser = async (data: any) => {
    const url = getRoute({ route: `${routes.admin.permission.assignRole}` });
    return await client<string>({ url, method: "POST", data });
};

export const getAllUsersByAdmin = async () => {
    const url = getRoute({ route: `${routes.admin.permission.allUser}` });
    return await client<{ Total: number; Users: User[] }>({ url, method: "GET" });
};
export const getAllRolesByAdmin = async () => {
    const url = getRoute({ route: `${routes.admin.permission.allRole}` });
    return await client<{ Name: string; _id: string }[]>({ url, method: "GET" });
};
export const getAllActionByAdmin = async () => {
    const url = getRoute({ route: `${routes.admin.permission.action}` });
    return await client<{ Name: string; _id: string }[]>({ url, method: "GET" });
};
export const deleteActionByAdmin = async (id: string) => {
    const url = getRoute({ route: `${routes.admin.permission.action}/${id}` });
    return await client<{ Name: string; _id: string }[]>({ url, method: "DELETE" });
};
