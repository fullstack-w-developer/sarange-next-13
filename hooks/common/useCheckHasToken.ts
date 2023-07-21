import React, { useEffect, useLayoutEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
const useCheckHasToken = () => {
    const [cookies] = useCookies(["token", "jwt"]);
    const { push } = useRouter();

    useLayoutEffect(() => {
        if (cookies.token) {
            push("/");
        }
    }, [cookies.token]);

    return {};
};

export default useCheckHasToken;
