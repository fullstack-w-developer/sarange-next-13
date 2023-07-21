import client from "./utils/client";
import routes from "../helper/routes/apiRoutes";
import { CheckCode, ForgetPass, LoginUser, SignupUser } from "@/types/Auth";
import { EditUser } from "@/types/User";
import { getRoute } from "@/helper/utils/services";

export const signupUser = async (data: SignupUser) => {
    const url = getRoute({ route: `${routes.auth.signup}` });
    return await client<string>({ url, method: "POST", data });
};
export const loginUser = async (data: LoginUser) => {
    const url = getRoute({ route: `${routes.auth.login}` });
    return await client<string>({ url, method: "POST", data });
};
export const forgetPass = async (data: ForgetPass) => {
    const url = getRoute({ route: `${routes.auth.forgetPass}` });
    return await client<string>({ url, method: "POST", data });
};

export const getActivationCodeSignup = async (phone: string) => {
    const url = getRoute({ route: `${routes.auth.getCodeSignup}/${phone}` });
    return await client<string>({ url, method: "GET" });
};

export const checkCodeSignup = async (data: CheckCode) => {
    const url = getRoute({ route: `${routes.auth.checkCodeSignup}` });
    return await client<string>({ url, method: "POST", data });
};
export const checkCodeLogin = async (data: CheckCode) => {
    const url = getRoute({ route: `${routes.auth.checkCodeLogin}` });
    return await client<{ token: string }>({ url, method: "POST", data });
};

export const editUserInfo = async (data: EditUser) => {
    const url = getRoute({ route: `${routes.auth.edit_user}` });
    return await client<string>({ url, method: "PATCH", data });
};
