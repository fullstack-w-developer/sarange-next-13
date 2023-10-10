"use client";
import Image from "next/image";
import React from "react";
import UserIcon from "@/assets/images/user.png";
import { usePathname, useRouter } from "next/navigation";
import { User } from "@/types/User";
import { Notifi_icon } from "../icons/icons";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
interface Props {
    back?: boolean;
    user?: User;
    totalNotfications?: number;
}
const ProfileInfo = ({ back, user, totalNotfications }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className="flex justify-between sticky top-0 px-5 py-4 border-b pb-4 items-center z-[9999] bg-[#f3f3f3]">
            <div className="flex gap-3 items-center">
                <div className="relative group  w-14 h-14 bg-orange rounded-full overflow-hidden">
                    <Image fill src={UserIcon} alt="" />
                </div>
                <div className="space-y-1">
                    <p className="font-estedad-bold">
                        {user?.FirstName} {user?.LastName}
                    </p>

                    <div className="flex items-center">
                        {!pathname.startsWith("/driver") && (
                            <p className="font-artin-regular">
                                موجودی : <span className="text-orange font-artin-bold">{user?.Balance?.toLocaleString()}</span>{" "}
                                تومان
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {back ? (
                <BiArrowBack onClick={() => router.back()} size={25} />
            ) : totalNotfications ? (
                <Link
                    href={"/notifications"}
                    className="relative border-2 border-orange w-10 h-10 rounded-full flex justify-center items-center"
                >
                    <Notifi_icon />
                    <span className="absolute w-4 text-xs font-artin-regular text-white flex justify-center items-center h-4 -top-2 -right-1  bg-orange rounded-full">
                        {totalNotfications}
                    </span>
                </Link>
            ) : (
                <Notifi_icon />
            )}
        </div>
    );
};

export default ProfileInfo;
