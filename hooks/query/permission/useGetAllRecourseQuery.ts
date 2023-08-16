import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getAllReourceByAdmin } from "@/services/permission";

const useGetAllRecourseQuery = () => {
    return useQuery([ADMIN.GET_ALL_RECOURCE], async () => await getAllReourceByAdmin(), {
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default useGetAllRecourseQuery;
