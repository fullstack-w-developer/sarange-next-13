"use client";
import { User } from "@/types/User";
import React, { useEffect } from "react";
import ProfileInfo from "../common/ProfileInfo";
import { usePathname } from "next/navigation";
import useAuthStore from "@/stores/auth-store";
interface Props {
    user: User;
    children: React.ReactNode;
}
const CounterLayout = ({ user, children }: Props) => {
    const { setUser, user: userInfo } = useAuthStore();
    const pathname = usePathname();
    const isUserPage = true
    useEffect(() => {
        if (!userInfo?.phone) {
            setUser({ user });
        }
    }, [pathname, userInfo?.phone]);
    return (
        <>
            {isUserPage && <ProfileInfo user={user} />}
            {children}
        </>
    );
};

export default CounterLayout;
