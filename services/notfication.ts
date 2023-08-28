import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { getRoute } from "@/helper/utils/services";


export const registerNotficationToken = async (data:object) => {
    const url = getRoute({ route: `${routes.notfication.registerToken}` });
    return await client<string>({ url, method: "PATCH", data });
}