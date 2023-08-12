import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllActionByAdmin, getAllRolesByAdmin } from "@/services/permission";

const useGetAllActionQuery = () => {
    return useQuery([ADMIN.GET_ALL_ACTION], async () => await getAllActionByAdmin(), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAllActionQuery;
