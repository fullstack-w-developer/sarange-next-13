"use client";
import { User } from "@/types/User";
import React, { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
interface Props {
    user: User;
    children: React.ReactNode;
}
const GlobalLayout = ({ user, children }: Props) => {
    const  pathname  = usePathname();
    const isUserPage = pathname === "/user" || pathname === "/user/transactions";
    useEffect(() => {
    }, [pathname])
    return (
        <>
            {
                isUserPage &&
                <ProfileInfo user={user} />
            }
            {children}
        </>
    );
};

export default GlobalLayout;
