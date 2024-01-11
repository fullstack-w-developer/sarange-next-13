import { useQuery } from "react-query";
import { sharjeAccountUser } from "../../../services/auth";
import { useRouter } from "next/navigation";

const useSharjeUserAccount = (amount:number) => {
    const router = useRouter();
    return useQuery("", async () => await sharjeAccountUser(amount), {
        enabled: false,
        cacheTime: 0,
        staleTime: 0,
        retry: 0,
        onSuccess: (data) => {
            location.href = data.url
        },
        onError: (error) => {},
    });
};

export default useSharjeUserAccount;
