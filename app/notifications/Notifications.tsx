"use client";
import BackHeader from "@/components/common/BackHeader";
import React from "react";
import { BsCheck2All } from "react-icons/bs";
import CardNotfications from "./CardNotfications";
import { readAllNotifications } from "@/server/common/action";

const Notifications = ({ notfication }: { notfication: any }) => {
    const onClick = () => {
        readAllNotifications();
    };
    return (
        <div className="w-[90%] mx-auto">
            <BackHeader name="اعلان ها" url="/" />

            <div>
                <div className="flex items-center justify-between py-3">
                    <h3 className="font-artin-bold">اعلان‌ها</h3>
                    <button onClick={onClick} className="text-orange flex gap-1 items-center !txet-xs font-artin-regular">
                        <BsCheck2All size={20} />
                        خواندن همه
                    </button>
                </div>
                {notfication[0].Notifications.length === 0 ? (
                    <p className="text-center font-artin-bold mt-32 text-[#626262]">اعلانی وجود ندارد</p>
                ) : (
                    <div className="flex flex-col gap-3 mt-3">
                        {notfication[0].Notifications.map((notfication: any, idx: number) => (
                            <CardNotfications notfication={notfication} key={idx} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Notifications;
