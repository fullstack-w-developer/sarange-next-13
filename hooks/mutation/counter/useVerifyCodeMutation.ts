import { useMutation } from "react-query";
import { checkCodeSignup } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import { useRouter } from "next/navigation";
import useCounterStore from "@/stores/counter-store";

const useVerifyCodeMutation = () => {
    const { setStep } = useCounterStore();
    const router = useRouter();
    return useMutation(async (data: CheckCode) => checkCodeSignup(data), {
        onSuccess: async function () {
            setStep(2);
        },
        onError: async function (error) {},
    });
};

export default useVerifyCodeMutation;
