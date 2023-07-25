import { useMutation } from "react-query";
import { deActiveCard } from "@/services/user";

const useDeActiveCardMutation = () => {
    return useMutation(async (id: any) => await deActiveCard(id!), {
        onSuccess: async function () {},
        onError: async function (error) {},
    });
};

export default useDeActiveCardMutation;
