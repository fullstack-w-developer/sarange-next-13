import { useMutation } from "react-query";
import { checkCodeLogin, checkCodeSignup } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useRouter } from "next/navigation";
import axios from "@/services/utils/axios";
import { useCookies } from "react-cookie";
import useGlobalStore from "@/stores/global-store";

const useVerifyCode = () => {
    const { isDriver, isSignupUser } = useGlobalStore();
    const [, setCookies] = useCookies(["token"]);
    const router = useRouter();
    return useMutation(async (data: CheckCode) => (isSignupUser ? checkCodeSignup(data) : checkCodeLogin(data)), {
        onSuccess: async function (data: any) {
            if (isSignupUser) {
                router.push("/auth/signup/information");
            } else {
                setCookies("token", data.token, { path: "/", maxAge: 3 * 24 * 60 * 60 * 1000 });
                axios.defaults.headers.common["x-access-token"] = `${data.token}`;
                if (isDriver) {
                    router.push("/driver");
                } else {
                    router.push("/user");
                }
            }
        },
        onError: async function (error) {},
    });
};

export default useVerifyCode;
