import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllUsersByAdmin } from "@/services/permission";

const useGetAllUserQuery = ({ page }: { page: number }) => {
    return useQuery([ADMIN.GET_ALL_USERS, page], async () => await getAllUsersByAdmin(page), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAllUserQuery;
