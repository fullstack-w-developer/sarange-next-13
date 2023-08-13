import { getRoute } from "@/helper/utils/services";
import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";

export const createreferance = async (data: any) => {
    const url = getRoute({ route: `${routes.admin.resource.add}` });
    return await client<string>({ url, method: "POST", data });
};
export const deleteReferance = async (id: any) => {
    const url = getRoute({ route: `${routes.admin.resource.delete}/${id}` });
    return await client<string>({ url, method: "DELETE" });
};
export const addAttribute = async (data:any) => {
    const url = getRoute({ route: `${routes.admin.attribute.add}/${data.id}/attributes` });
    return await client<string>({ url, method: "POST",data });
};
export const getAllAttribute = async (name:string) => {
    const url = getRoute({ route: `${routes.admin.attribute.add}/${name}/attributes` });
    return await client<any>({ url, method: "GET" });
};
