import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/navigation";
import { createAction, createRole } from "@/services/permission";
import { successToast } from "@/helper/utils/error";
import { ADMIN } from "@/helper/constants/query-keys";
import useReferanceStore from "@/stores/reference-store";
import { createreferance } from "@/services/referance";

const useAddReferanceMutation = () => {
    const { toggleNewReferance } = useReferanceStore();
    const router = useRouter();

    return useMutation(async (data: any) => await createreferance(data), {
        onSuccess: async function () {
            successToast("با موفقیت ایجاد شد");
            router.prefetch("/admin/references");
        },
        onError: async function (error) {},
    });
};

export default useAddReferanceMutation;
