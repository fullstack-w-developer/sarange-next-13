import { useMutation } from "react-query";
import { loginUser } from "@/services/auth";
import { LoginUser } from "@/types/Auth";
import { useRouter } from "next/navigation";
import { successToast } from "@/helper/utils/error";

const useLoginMuation = () => {
    const router = useRouter();
    return useMutation(async (data: LoginUser) => await loginUser(data), {
        onSuccess: async function (data:any) {
            successToast(`کد ورود شما ${data.num} می باشد`)
            router.push("/auth/verify");
        },
        onError: async function (error) {},
    });
};

export default useLoginMuation;
