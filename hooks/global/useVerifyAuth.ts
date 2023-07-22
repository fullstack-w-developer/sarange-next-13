import { useRouter } from "next/navigation";
import axios from "../../services/utils/axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const useVerifyAuth = () => {
    const router = useRouter()
    const [cookies] = useCookies(["token"]);
    // function disableBackButton() {
    //     window.history.replaceState(null, document.title, window.location.href);
    //     window.addEventListener('popstate', function (event) {
    //         event.preventDefault();
    //         window.history.forward();
    //     });
    // }
    const checkToken = async () => {
        if (cookies.token) {
            axios.defaults.headers.common["x-access-token"] = `${cookies.token}`;
        }
    };
    useEffect(() => {
        checkToken();
        // disableBackButton()

    }, [cookies.token]);
    useEffect(() => {
        const disableBrowserBackButton = (event: any) => {
            event.preventDefault();
            router.push('/');
        };
        // @ts-ignore
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', disableBrowserBackButton);

        return () => {
            window.removeEventListener('popstate', disableBrowserBackButton);
        };
    }, [router]);
};



export default useVerifyAuth;
