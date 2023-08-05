import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { getRoute } from "@/helper/utils/services";

export const shargeCard = async (data: any) => {
    const url = getRoute({ route: `${routes.counter.sharge}` });
    return await client<string>({ url, method: "POST", data });
};

export const getActiveationCode = async (data: any) => {
    const url = getRoute({ route: `${routes.counter.get_code}` });
    return await client<{ IsNewUser: boolean,hasUserActiveCard:boolean }>({ url, method: "POST", data });
};
export const getAssignCardToExitUser = async (data: any) => {
    const url = getRoute({ route: `${routes.counter.assign_card_user}/${data.cardId}/assignToUser` });
    return await client({ url, method: "POST", data });
};
export const getAssignCardToNewUser = async (data: any) => {
    const url = getRoute({ route: `${routes.counter.assign_card_user}/${data.cardId}/newUser` });
    return await client({ url, method: "POST", data });
};



export const getUserActiveCard = async (phone: string) => {
    const url = getRoute({ route: `${routes.counter.get_user_active_card}/${phone}/ActivateCard` });
    return await client<any>({ url, method: "GET" });
};
export const deactiveCardByCounter = async (id: string) => {
    const url = getRoute({ route: `${routes.counter.deactive_card_user}/${id}/status` });
    return await client<any>({ url, method: "PATCH" });
};