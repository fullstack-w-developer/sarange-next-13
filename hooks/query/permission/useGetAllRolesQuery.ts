import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllRolesByAdmin } from "@/services/permission";

const useGetAllRolesQuery = () => {
    return useQuery([ADMIN.GET_ALL_Roules], async () => await getAllRolesByAdmin(), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAllRolesQuery;
