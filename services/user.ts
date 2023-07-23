import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { ResponseGetUserInfoQuery } from "@/types/User/ResponseGetUserInfoQuery";
import { Trip } from "@/types/Driver/ResponseUserTripQuery";
import { Transaction } from "@/types/User";
import { getRoute } from "@/helper/utils/services";

export const getUser = async () => {
    const url = getRoute({ route: `${routes.auth.me}` });
    return await client<ResponseGetUserInfoQuery>({ url, method: "GET" });
};
export const getUserTrip = async () => {
    const url = getRoute({ route: `${routes.driver.trip}` });
    return await client<Trip[]>({ url, method: "GET" });
};
export const getMyTransactions = async () => {
    const url = getRoute({ route: `${routes.user.my_transactions}` });
    return await client<Transaction[]>({ url, method: "GET" });
};
export const rateToDriver = async (data:{star:number},id:string) => {
    const url = getRoute({ route: `${routes.user.rate}/${id}/rate` });
    return await client<Transaction[]>({ url, method: "POST",data });
};
