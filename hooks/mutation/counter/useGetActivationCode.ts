import { useMutation } from "react-query";
import { getActiveationCode } from "@/services/counter";
import useCounterStore from "@/stores/counter-store";

const useGetActivationCode = () => {
    const { setInformation, setStep } = useCounterStore();
    return useMutation(async (data: any) => await getActiveationCode(data), {
        onSuccess: async function ({ IsNewUser }) {
            setInformation({ IsNewUser });
            setStep(1);
        },
        onError: async function (error) {},
    });
};

export default useGetActivationCode;
