import { useMutation } from "react-query";
import { getActiveationCode } from "@/services/counter";
import useCounterStore from "@/stores/counter-store";

const useGetActivationCode = () => {
    const { setInformation, setStep , setStepCardblocking} = useCounterStore();
    return useMutation(async (data: any) => await getActiveationCode(data), {
        onSuccess: async function ({ IsNewUser,hasUserActiveCard }) {
            setInformation({ IsNewUser,hasUserActiveCard });
            setStep(1);
            setStepCardblocking(1)
        },
        onError: async function (error) {},
    });
};

export default useGetActivationCode;
