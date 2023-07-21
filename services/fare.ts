import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { getRoute } from "@/helper/utils/services";

export const farePayment = async (data: any) => {
    const url = getRoute({ route: `${routes.fare}` });
    return await client<string>({ url, method: "POST", data });
};
