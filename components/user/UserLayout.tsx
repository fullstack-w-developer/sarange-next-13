"use client";
import { User } from "@/types/User";
import React, { useEffect } from "react";
import ProfileInfo from "../common/ProfileInfo";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import useAuthStore from "@/stores/auth-store";
interface Props {
    user: User;
    children: React.ReactNode;
}
const UserLayout = ({ user, children }: Props) => {
    const { setUser, user: userInfo } = useAuthStore();
    const pathname = usePathname();
    const isUserPage = pathname === "/user" || pathname === "/user/transactions" || pathname.startsWith("/moneytransfer");
    useEffect(() => {
        if (!userInfo?.phone) {
            setUser({ user });
        }
    }, [pathname]);
    return (
        <>
            {isUserPage && <ProfileInfo user={user} />}
            {children}
        </>
    );
};

export default UserLayout;
