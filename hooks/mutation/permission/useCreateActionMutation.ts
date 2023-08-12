import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import { createAction, createRole } from "@/services/permission";
import { successToast } from "@/helper/utils/error";
import { ADMIN } from "@/helper/constants/query-keys";

const useCreateActionMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(async (data: any) => await createAction(data), {
        onSuccess: async function () {
            queryClient.refetchQueries({ queryKey: ADMIN.GET_ALL_ACTION });
            successToast("با موفقیت ایجاد شد");
        },
        onError: async function (error) {},
    });
};

export default useCreateActionMutation;
