import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { getDriverByCityName, getUserByCardId } from "@/services/driver";
import { DRIVER } from "@/helpers/constants/query-keys";
import useDriverStore from "@/stores/driver-store";

const useGetUserByCardIdQuery = () => {
    const { payWithDriver } = useDriverStore();
    const router = useRouter();
    const { setDriver } = useDriverStore();
    return useQuery(
        [DRIVER.GET_USER_CARDID, payWithDriver.cardId],
        async () => await getUserByCardId("64b61e3449917959a31ade53"),
        {
            enabled: Boolean(payWithDriver.cardId),
            cacheTime: 0,
            staleTime: 0,
            retry: 0,
            onSuccess: async (data) => {
                if (!data?.CarRoute?.Name) return;
                await setDriver(data);
                router.push(`/driver/user/info`);
            },
            onError: (error) => {},
        },
    );
};

export default useGetUserByCardIdQuery;
