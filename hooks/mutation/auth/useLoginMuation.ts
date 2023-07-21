import { useMutation } from "react-query";
import { loginUser } from "@/services/auth";
import { LoginUser } from "@/types/Auth";
import { useRouter } from "next/navigation";

const useLoginMuation = () => {
    const router = useRouter();
    return useMutation(async (data: LoginUser) => await loginUser(data), {
        onSuccess: async function ({}) {
            router.push("/auth/verify");
        },
        onError: async function (error) {},
    });
};

export default useLoginMuation;
