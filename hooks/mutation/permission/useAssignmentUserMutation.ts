import { useMutation } from "react-query";
import { assignmentUser } from "@/services/permission";
import { successToast } from "@/helper/utils/error";

const useAssignmentUserMutation = () => {
    return useMutation(async (data: any) => await assignmentUser(data), {
        onSuccess: async function () {
            successToast("با موفقیت انتصاب داده شد");
        },
        onError: async function (error) {},
    });
};

export default useAssignmentUserMutation;
