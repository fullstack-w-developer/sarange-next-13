import { useMutation } from "react-query";
import { successToast } from "@/helper/utils/error";
import useReferanceStore from "@/stores/reference-store";
import { useRouter } from "next/navigation";
import { deleteReferance } from "@/services/referance";

const useDeleteReferanceMutation = () => {
    const router = useRouter();
    const { toggleDeleteReferance } = useReferanceStore();
    return useMutation(async (data: any) => await deleteReferance(data), {
        onSuccess: async function () {
            successToast("با موفقیت حذف شد شد");
            toggleDeleteReferance({});
            router.push("/admin/references");
        },
        onError: async function (error) {},
    });
};

export default useDeleteReferanceMutation;
