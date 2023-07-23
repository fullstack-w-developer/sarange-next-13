import Image from "next/image";
import React from "react";
import User from "@/assets/images/user.png";
const ProfileImage = () => {
    return (
        <div className="bg-orange rounded-full w-16 h-16 flex justify-center items-center">
            <Image src={User} alt="" />
        </div>
    );
};

export default ProfileImage;
