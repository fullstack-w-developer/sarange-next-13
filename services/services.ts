import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { getRoute } from "@/helper/utils/services";

export const withdrawalsByDriver = async (data: { amount: number }) => {
    const url = getRoute({ route: `${routes.driver.request_checkout}` });
    return await client<string>({ url, method: "POST", data });
};
