import { getAssignCardToExitUser } from "@/services/counter";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

const useAssignCardToExitUser = () => {
    const router = useRouter();
    return useMutation(async (data: any) => await getAssignCardToExitUser(data), {
        onSuccess: async function () {
            router.push("/counter/cardissuance/result");
        },
        onError: async function (error) {},
    });
};

export default useAssignCardToExitUser;
