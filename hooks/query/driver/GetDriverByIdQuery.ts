import { useQuery } from "react-query";
import { ADMIN } from "@/helper/constants/query-keys";
import { getDriverById } from "@/services/driver";

const GetDriverByIdQuery = ({ id }: { id: string }) => {

    return useQuery([ADMIN.GET_Driver_Info], async () => await getDriverById(id), {
        enabled: Boolean(id),
        onSuccess: () => {},
        onError: (error) => {},
    });
};

export default GetDriverByIdQuery;
