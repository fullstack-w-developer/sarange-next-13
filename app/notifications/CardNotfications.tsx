"use client";

import React from "react";
interface Props {
    notfication: {
        Title: string;
        Body: string;
        isSeen: boolean;
        createdAt: string;
    };
}
const CardNotfications = ({ notfication }: Props) => {
    const options1 = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        calendar: "persian",
    };
    const options2 = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    };
    return (
        <div className="border-b border-[#e1e1e1] pb-2">
            <div className="">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {!notfication.isSeen && <span className="inline-block w-3 h-3 bg-orange rounded-full"></span>}
                        <h1 className="font-artin-bold">{notfication.Title}</h1>
                    </div>
                    <div>
                        <p className="text-xs font-artin-light text-[#626262]">
                        {/* @ts-ignore */}
                            {new Date(notfication.createdAt).toLocaleDateString("fa-IR", options2)}
                        </p>
                    </div>
                </div>
                <p className="font-artin-regular py-2  text-[#626262]">{notfication.Body}</p>
            </div>

            <div></div>
        </div>
    );
};

export default CardNotfications;
