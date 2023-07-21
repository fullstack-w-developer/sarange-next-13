import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { ResponseGetGriverByCityNumberQuery } from "@/types/Driver/ResponseGetGriverByCityNumberQuery";
import { getRoute } from "@/helper/utils/services";

export const getDriverByCityName = async (code: string) => {
    const url = getRoute({ route: `${routes.driver.getDriverByCityNumber}/${code}` });
    return await client<ResponseGetGriverByCityNumberQuery>({ url, method: "GET" });
};

export const getDriver = async () => {
    const url = getRoute({ route: `${routes.driver.me}` });
    return await client<any>({ url, method: "GET" });
};
export const getUserInfoByPhone = async (phone: string) => {
    const url = getRoute({ route: `${routes.driver.get_userInfo_by_phone}/${phone}` });
    return await client<any>({ url, method: "GET" });
};
export const getUserByCardId = async (cardId: string) => {
    const url = getRoute({ route: `${routes.driver.user_userInfo_by_cardId}/${cardId}` });
    return await client<any>({ url, method: "GET" });
};
