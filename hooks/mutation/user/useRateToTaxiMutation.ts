import { useMutation } from "react-query";
import { useSearchParams } from "next/navigation";
import { rateToDriver } from "@/services/user";

const useRateToTaxiMutation = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    return useMutation(async (data: any) => await rateToDriver(data, id!), {
        onSuccess: async function () {},
        onError: async function (error) {},
    });
};

export default useRateToTaxiMutation;
