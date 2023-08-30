import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { getRoute } from "@/helper/utils/services";

export const getAllRoutes = async (page: number) => {
    const url = getRoute({ route: `${routes.admin.routes}&skip=${page}` });
    return await client<any>({ url, method: "GET" });
};
