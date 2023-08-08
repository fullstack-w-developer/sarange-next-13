import { deactiveCardByCounter } from "@/services/counter";
import useCounterStore from "@/stores/counter-store";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

const useDeactiveCardUserByCounterMutation = (isCardissuance?: boolean) => {
    const router = useRouter();
    const { setStep } = useCounterStore();
    return useMutation(async (id: string) => await deactiveCardByCounter(id), {
        onSuccess: async function () {
            if (isCardissuance) {
                return setStep(2);
            }
            router.push("/counter/cardblocking/result");
        },
        onError: async function (error) {},
    });
};

export default useDeactiveCardUserByCounterMutation;
