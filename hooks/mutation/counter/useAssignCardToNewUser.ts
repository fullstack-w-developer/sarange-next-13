import { getAssignCardToNewUser } from "@/services/counter";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

const useAssignCardToNewUser = () => {
    const router = useRouter();
    return useMutation(async (data: any) => await getAssignCardToNewUser(data), {
        onSuccess: async function () {
            router.push("/counter/cardissuance/result")
        },
        onError: async function (error) { },
    });
};

export default useAssignCardToNewUser;
