import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { shargeCard } from "@/services/counter";

const useShargeCardMutation = () => {
    const router = useRouter();
    return useMutation(async (data: any) => await shargeCard(data), {
        onSuccess: async function () {
            router.push("/counter/inquiry/result");
        },
        onError: async function (error) {},
    });
};

export default useShargeCardMutation;
