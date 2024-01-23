import Image from "next/image";
import React from "react";
import User from "@/assets/images/user.png";
import { Location_icon } from "@/components/icons/icons";
import { Driver } from "@/types/Driver";
interface Props {
    driver: Driver;
}
const InfoDriverProfile = ({ driver }: Props) => {
    return (
        <div className="flex items-center gap-2 mt-8 ">
            <div className="bg-orange rounded-full w-16 h-16 flex justify-center items-center">
                <Image src={User} alt="" />
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-estedad-bold">
                    <span>
                        {driver?.Firstname} {driver?.LastName}
                    </span>
                </p>
                <div className="flex gap-2 items-center">
                    <Location_icon />
                    <p className="font-artin-regular">{driver?.CarRoute.Name}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoDriverProfile;
