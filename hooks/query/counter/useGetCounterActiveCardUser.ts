import { useQuery } from "react-query";
import { getUserActiveCard } from "@/services/counter";
import { COUNTER } from "@/helper/constants/query-keys";

const useGetCounterActiveCardUser = ({ phone }: { phone: string }) => {
    return useQuery([COUNTER.GET_ACTIVE_CARD], async () => await getUserActiveCard(phone), {
        enabled: Boolean(phone),
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetCounterActiveCardUser;
