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
    totalNotfications?: number;
}
const UserLayout = ({ user, totalNotfications, children }: Props) => {
    const pathname = usePathname();
    const isUserPage = pathname === "/user" || pathname === "/user/transactions" || pathname.startsWith("/moneytransfer");
    return (
        <>
            {isUserPage && <ProfileInfo totalNotfications={totalNotfications} user={user} />}
            {children}
        </>
    );
};

export default UserLayout;
