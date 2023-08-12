import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllUsersByAdmin } from "@/services/permission";

const useGetAllUserQuery = () => {
    return useQuery([ADMIN.GET_ALL_USERS], async () => await getAllUsersByAdmin(), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAllUserQuery;
