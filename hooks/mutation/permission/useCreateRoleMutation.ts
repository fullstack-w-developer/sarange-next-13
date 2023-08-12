import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import { createRole } from "@/services/permission";
import { successToast } from "@/helper/utils/error";
import { ADMIN } from "@/helper/constants/query-keys";

const useCreateRoleMutation = () => {
    const queryClient = useQueryClient();
    return useMutation(async (data: any) => await createRole(data), {
        onSuccess: async function () {
            successToast("با موفقیت ایجاد شد");
            queryClient.refetchQueries({ queryKey: ADMIN.GET_ALL_Roules });
        },
        onError: async function (error) {},
    });
};

export default useCreateRoleMutation;
