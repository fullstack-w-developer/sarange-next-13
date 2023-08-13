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
