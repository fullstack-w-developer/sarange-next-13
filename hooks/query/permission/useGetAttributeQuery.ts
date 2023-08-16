import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllActionByAdmin, getAllAttributeByAdmin, getAllRolesByAdmin } from "@/services/permission";

const useGetAttributeQuery = (id: string) => {
    return useQuery([ADMIN.GET_ALL_ATTRIBUTE, id], async () => await getAllAttributeByAdmin(id), {
        enabled: Boolean(id),

        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAttributeQuery;
