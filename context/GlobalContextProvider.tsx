"use client";
import React, { ReactNode, useEffect } from "react";
import { ToastContainer, toast } from "react-toast";
import { QueryClientProvider } from "react-query";
import useConfigureQueryClient from "@/hooks/common/useConfigureQueryClient";
import { MuiRtl } from "@/theme/RtlProvider";
import useHandleCookies from "@/hooks/common/useHandleCookies";
import useVerifyAuth from "@/hooks/global/useVerifyAuth";
import useAndroidBackButton from "@/hooks/common/useAndroidBackButton";
import useFcmToken from "@/hooks/common/useFcmToken";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "@/helper/utils/firebase/firebase";
interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();
    useHandleCookies();
    useVerifyAuth();
    useAndroidBackButton(true);




    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ToastContainer delay={8000} position="top-right" />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;
