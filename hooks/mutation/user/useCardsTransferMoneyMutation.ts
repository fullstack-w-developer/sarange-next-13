import { useMutation } from "react-query";
import { deActiveCard, transferMoney } from "@/services/user";
import { useRouter } from "next/navigation";

const useCardsTransferMoneyMutation = () => {
    const router = useRouter();
    return useMutation(async (data: any) => await transferMoney(data), {
        onSuccess: async function () {
            router.push("/user/moneytransfer/result");
        },
        onError: async function (error) {},
    });
};

export default useCardsTransferMoneyMutation;
