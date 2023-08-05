import { useMutation } from "react-query";
import { checkCodeSignup } from "@/services/auth";
import { CheckCode } from "@/types/Auth";
import useCounterStore from "@/stores/counter-store";

const useVerifyCodeMutation = () => {
    const { setStep, setStepCardblocking ,information} = useCounterStore();
    return useMutation(async (data: CheckCode) => checkCodeSignup(data), {
        onSuccess: async function () {
            console.log(information)
            if(information.hasUserActiveCard){
                return setStep(4)
            }
            setStep(2);
            setStepCardblocking(2)
        },
        onError: async function (error) {},
    });
};

export default useVerifyCodeMutation;
