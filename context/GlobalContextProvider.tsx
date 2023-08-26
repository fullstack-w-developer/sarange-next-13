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
    const { fcmToken, notificationPermissionStatus } = useFcmToken();
    const queryClient = useConfigureQueryClient();
    useHandleCookies();
    useVerifyAuth();
    useAndroidBackButton(true);

    fcmToken && console.log('FCM token:', fcmToken);

    useEffect(() => {
        alert(fcmToken)
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            const messaging = getMessaging(firebaseApp);
            const unsubscribe = onMessage(messaging, (payload) => {
                console.log('Foreground push notification received:', payload);
            });
            return () => {
                alert("jjjjjjjjjjjjjjjjjjjjj")
                unsubscribe(); // Unsubscribe from the onMessage event
            };
        }
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <p>{fcmToken}</p>
            {children}
            <ToastContainer delay={8000} position="top-right" />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;
