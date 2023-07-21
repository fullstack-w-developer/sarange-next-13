import { useMutation } from "react-query";
import { forgetPass } from "@/services/auth";
import { ForgetPass } from "@/types/Auth";

const useForgetPassMutation = () => {
    return useMutation(async (data: ForgetPass) => await forgetPass(data), {
        onError: async function (error) {},
    });
};

export default useForgetPassMutation;
