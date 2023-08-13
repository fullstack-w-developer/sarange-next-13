import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllActionByAdmin, getAllRolesByAdmin } from "@/services/permission";
import { getAllAttribute } from "@/services/referance";

const useGetAttributeQuery = (name:string) => {
    return useQuery([ADMIN.GET_ALL_ATTRIBUTE], async () => await getAllAttribute(name), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAttributeQuery;
