import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { addAttribute } from "@/services/referance";

const useAddAttributeMutation = () => {
    const router = useRouter();

    return useMutation(async (data: any) => await addAttribute(data), {
        onSuccess: async function () {},
        onError: async function (error) {},
    });
};

export default useAddAttributeMutation;
