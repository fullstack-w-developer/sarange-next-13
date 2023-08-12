import { useMutation, useQueryClient } from "react-query";
import { editRole } from "@/services/permission";
import { successToast } from "@/helper/utils/error";
import { ADMIN } from "@/helper/constants/query-keys";
import usePermisstionStore from "@/stores/permisstion-store";

const useEditRoleMutation = () => {
    const { setModal } = usePermisstionStore();

    const queryClient = useQueryClient();
    return useMutation(async (data: any) => await editRole(data), {
        onSuccess: async function () {
            setModal({});
            successToast("با موفقیت حذف شد شد");
            queryClient.refetchQueries({ queryKey: ADMIN.GET_ALL_Roules });
        },
        onError: async function (error) {},
    });
};

export default useEditRoleMutation;
