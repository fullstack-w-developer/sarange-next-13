"use client";
import React from "react";
import { LuLaptop } from "react-icons/lu";
type Props ={
    service:{
        title:string;
        des:string
    }
}
const CardService = ({service}:Props) => {
    return (
        <div className="lg:h-64 w-full pb-4 lg:pb-0 relative bg-white rounded-[17.55px] lg:rounded-[30px]">
            <div className="bg_card_pattern" />
            <div className="px-5 pt-3 lg:pt-5">
                <LuLaptop className="text-init w-7 h-7 lg:w-20 lg:h-20" />
                <h6 className="text-right text-slate-800 lg:text-[22px] font-black py-1 lg:py-0 lg:leading-[47.74px]">
                    {service.title}
                </h6>
                <span className=" block opacity-90 text-right text-slate-800 text-xs lg:text-sm font-light lg:leading-[30.38px]">
                    {service.des}
                </span>
            </div>
        </div>
    );
};

export default CardService;
