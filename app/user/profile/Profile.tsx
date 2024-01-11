"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo_white.svg";
import MoreMenu from "@/components/common/MoreMenu";
import { menuUser, moreMenuUser } from "@/helper/utils/data";
import SocialMedia from "@/components/common/SocialMedia";
import { Logout_iocn } from "@/components/icons/icons";
import Menu from "@/components/common/Menu";
import useAuthStore from "@/stores/auth-store";
import Logout from "@/components/common/Logout";
import { User } from "@/types/User";
import InfoUser from "@/components/common/InfoUser";
const Profile = ({ user }: { user: User }) => {
    const { toggleLogout } = useAuthStore();

    return (
        <>
            <div className="@bg-[#f8f8f8] min-h-screen">
                <div className="bg_profile pb-10 pt-8 flex justify-center items-center">
                    <Image alt="" src={Logo} />
                </div>
                <div className="bg-white min-h-screen px-4 rounded-t-[28px] -mt-6">
                    <InfoUser user={user} />
                    <MoreMenu list={moreMenuUser} />
                    <SocialMedia />
                    <button
                        onClick={toggleLogout}
                        className="w-full px-2 mt-7 flex items-center gap-2 py-4 rounded-lg text-[#DF2040] bg-[#FCE9EC]"
                    >
                        <Logout_iocn />
                        <p className="font-artin-regular">خروج از حساب</p>
                    </button>
                </div>
                <Menu menu={menuUser} />
            </div>
            <Logout />
        </>
    );
};

export default Profile;
