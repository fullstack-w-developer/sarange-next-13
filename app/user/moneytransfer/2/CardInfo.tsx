"use client";
import useAuthStore from "@/stores/auth-store";
import useUserStore from "@/stores/user-store";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
interface Props {
    details: {
        FirstName: string;
        LastName: string;
        Serial: string;
    };
}
const CardInfo = ({ details }: Props) => {
    const { moneytransfer } = useUserStore();
    const { user } = useAuthStore();
    return (
        <div className=" mt-10">
            <div className=" flex flex-col gap-3 border rounded-lg p-4 bg-[#f8f8f8]">
                <div className="flex justify-between items-center">
                    <p className="font-artin-regular text-lg text-[#626262]">
                        {" "}
                        <span className="text-[#222] text-xl font-artin-bold">از: </span>
                        {user?.FirstName} {user?.LastName}
                    </p>
                    <div className="flex items-center gap-3">
                        <p className="font-artin-regular">مبلغ:</p>
                        <p className="font-artin-bold text-xl text-orange">
                            {moneytransfer?.Amount?.toLocaleString()} <span className="text-[14px] text-[#626262]">تومان</span>
                        </p>
                    </div>
                </div>
                <p className="w-full border-b relative border-dashed">
                    <BsCheckCircleFill size={28} className="absolute text-green-600 left-1/2 -top-3 -translate-x-1/2 " />
                </p>
                <div className="flex items-center justify-between">
                    <p className="font-artin-regular text-[18px] text-[#626262]">
                        {" "}
                        <span className="text-[#222] text-[20px] font-artin-bold">به: </span>
                        {details.FirstName} {details.LastName}
                    </p>
                    <p className="font-artin-regular text-[18px] text-[#626262]">
                        {" "}
                        <span className="text-[#222] text-[17px] font-artin-bold">به شماره سریال: </span>
                        {details.Serial}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
