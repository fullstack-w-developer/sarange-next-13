import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllActionByAdmin, getAllRolesByAdmin } from "@/services/permission";
import { getAllAttribute } from "@/services/referance";
import { getAllRoutes } from "@/services/routes";

const useGetRoutesQuery = (page: number) => {
    return useQuery([ADMIN.GET_ALL_ROUTES], async () => await getAllRoutes(page), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetRoutesQuery;
