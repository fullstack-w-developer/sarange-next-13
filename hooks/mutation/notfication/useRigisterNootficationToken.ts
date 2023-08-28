import { useMutation } from "react-query";
import { registerNotficationToken } from "@/services/notfication";
const useRigisterNootficationToken = () => {
    return useMutation(async (data: any) => await registerNotficationToken(data), {
        onSuccess: async function () {
        
        },
        onError: async function (error) {},
    });
};

export default useRigisterNootficationToken;
