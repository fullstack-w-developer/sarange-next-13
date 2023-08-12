import { useMutation, useQueryClient } from "react-query";
import { editAction, editRole } from "@/services/permission";
import { successToast } from "@/helper/utils/error";
import { ADMIN } from "@/helper/constants/query-keys";
import usePermisstionStore from "@/stores/permisstion-store";

const useEditActionMutation = () => {
    const { setModal } = usePermisstionStore();

    const queryClient = useQueryClient();
    return useMutation(async (data: any) => await editAction(data), {
        onSuccess: async function () {
            setModal({});
            successToast("با موفقیت حذف شد شد");
            queryClient.refetchQueries({ queryKey: ADMIN.GET_ALL_ACTION });
        },
        onError: async function (error) {},
    });
};

export default useEditActionMutation;
