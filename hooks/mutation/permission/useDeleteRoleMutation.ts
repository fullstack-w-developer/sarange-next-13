import { useMutation, useQueryClient } from "react-query";
import { deleteRole } from "@/services/permission";
import { successToast } from "@/helper/utils/error";
import { ADMIN } from "@/helper/constants/query-keys";
import usePermisstionStore from "@/stores/permisstion-store";

const useDeleteRoleMutation = () => {
    const { modal, setModal } = usePermisstionStore();

    const queryClient = useQueryClient();
    return useMutation(async (data: any) => await deleteRole(data), {
        onSuccess: async function () {
            setModal({});
            successToast("با موفقیت حذف شد شد");
            queryClient.refetchQueries({ queryKey: ADMIN.GET_ALL_Roules });
        },
        onError: async function (error) {},
    });
};

export default useDeleteRoleMutation;
