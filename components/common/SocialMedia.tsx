"use client";
import { social_media } from "@/helper/utils/data";
import React from "react";

const SocialMedia = () => {
    return (
        <div className="py-5 border-b border-gray-200">
            <h1 className="font-artin-black text-[17px] text-[#222]">مارو در شبکه های اجتمائی دنبال کنید</h1>
            <div className=" flex items-center justify-between py-5">
                {social_media.map((icon, i) => (
                    <span
                        className="rounded-full bg-gray-100/30 shadow-sm  transition-all duration-500 border-gray-100 flex justify-center items-center w-10 h-10 border"
                        key={i}
                    >
                        {/* <icon.icon size={24} color={icon.color} /> */}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
