import { useRouter } from "next/navigation";
import { withdrawalsByDriver } from "../../../services/services";
import { useMutation } from "react-query";

const useCheckoutByDriverMutation = () => {
    const router = useRouter();
    return useMutation(async (data: { amount: number }) => await withdrawalsByDriver(data), {
        onSuccess: async function () {
            router.push("/driver/checkout/result");
        },

        onError: async function (error) {},
    });
};

export default useCheckoutByDriverMutation;
