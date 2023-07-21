"use client";
import React, { ReactNode } from "react";
import { ToastContainer, toast } from "react-toast";
import { QueryClientProvider } from "react-query";
import useConfigureQueryClient from "@/hooks/common/useConfigureQueryClient";
import { MuiRtl } from "@/theme/RtlProvider";
import useHandleCookies from "@/hooks/common/useHandleCookies";
interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();
    useHandleCookies();
    return (
        <QueryClientProvider client={queryClient}>
            <MuiRtl>{children}</MuiRtl>
            <ToastContainer delay={8000} position="top-right" />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;
