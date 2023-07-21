import { useQuery } from "react-query";
import { getActivationCodeSignup } from "../../../services/auth";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/auth-store";

const useGetCodeActivationQuery = () => {
    const { user } = useAuthStore();
    const router = useRouter();
    return useQuery("", async () => await getActivationCodeSignup(user?.phone!), {
        enabled: false,
        cacheTime: 0,
        staleTime: 0,
        retry: 0,
        onSuccess: () => {
            router.push(`/auth/verify`);
        },
        onError: (error) => {},
    });
};

export default useGetCodeActivationQuery;
