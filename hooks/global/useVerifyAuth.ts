import axios from "../../services/utils/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";


const useVerifyAuth = () => {
    const [cookies] = useCookies(["token"]);

    const checkToken = async () => {
        if (cookies.token) {
            axios.defaults.headers.common["x-access-token"] = `${cookies.token}`;
        }
    };
    useEffect(() => {
        checkToken();
    }, [cookies.token]);
};

export default useVerifyAuth;
