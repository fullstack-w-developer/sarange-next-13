import axios from "../../services/utils/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useVerifyAuth = () => {
    const [cookies] = useCookies(["token"]);
    function disableBackButton() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        });
    }
    const checkToken = async () => {
        if (cookies.token) {
            axios.defaults.headers.common["x-access-token"] = `${cookies.token}`;
        }
    };
    useEffect(() => {
        checkToken();
        disableBackButton()

    }, [cookies.token]);
};

export default useVerifyAuth;
