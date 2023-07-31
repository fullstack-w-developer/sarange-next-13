import { useMutation } from "react-query";
import { checkCodeLogin, checkCodeSignup } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useRouter } from "next/navigation";
import axios from "@/services/utils/axios";
import { useCookies } from "react-cookie";
import useGlobalStore from "@/stores/global-store";
import jwt_decode from "jwt-decode";

const useVerifyCode = () => {
    const { isSignupUser } = useGlobalStore();
    const [, setCookies] = useCookies(["token"]);
    const router = useRouter();
    return useMutation(async (data: CheckCode) => (isSignupUser ? checkCodeSignup(data) : checkCodeLogin(data)), {
        onSuccess: async function (data: any) {
            if (isSignupUser) {
                router.push("/auth/signup/information");
            } else {
                const decoded: any = await jwt_decode(data.token);
                setCookies("token", data.token, { path: "/", maxAge: 3 * 24 * 60 * 60 * 1000 });
                axios.defaults.headers.common["x-access-token"] = `${data.token}`;
                if (decoded.UserRole === "Driver") {
                    router.push("/driver");
                } else if (decoded.UserRole === "Customer") {
                    router.push("/user");
                } else if (decoded.UserRole === "Counter") {
                    router.push("/counter");
                } else {
                    router.push("/admin");
                }
            }
        },
        onError: async function (error) {},
    });
};

export default useVerifyCode;
