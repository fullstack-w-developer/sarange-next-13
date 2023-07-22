import axios from "../../services/utils/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useVerifyAuth = () => {
    const [cookies] = useCookies(["token"]);
    function disableBackButton() {
        window.addEventListener('popstate', function (event) {
            event.preventDefault();
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
