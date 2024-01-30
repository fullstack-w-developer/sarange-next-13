"use client";
import React from "react";
import { Arrow_duotone_Icon, Phone_Icon } from "@/components/landing/common/Icon";
import Image from "next/image";
import Man from "@/public/images/taxi.png";
import Text from "@/public/images/text.svg";

const Introduction = () => {
    return (
        <section className="w-[90%] mx-auto lg:ml-0 lg:mr-auto mt-[5rem] flex flex-col-reverse lg:flex-row lg:justify-between ">
            <div className="flex-1 pt-10 lg:pt-0">
                <p className="text-center lg:text-right text-slate-900 text-2xl lg:leading-[4rem] lg:text-[49.92px] font-black">
                   اپلیکیشن سارنگ
                </p>
                <p className="pt-5 lg:pt-12 lg:w-[70%] opacity-90 text-justify text-black text-lg font-light  lg:leading-[39.06px]">
                     <span className="text-[22px] font-bold text-yellow"> اپلیکیشن سارنگ</span> یک برنامه ای کاربردی و چند منظوره است که با استفاده از آن بر روی گوشی خود
                    میتوانید برخی از کارهای روزمره خودتان را به سادگی از طریق آن انجام دهید .
                    <br/>
                    برخی امکانات مهم اپلیکیشن : <span className="text-amber-500 text-[22px] animate-ping"> ● </span>امکان
                    پرداخت کرایه در خطوط حمل ونقل عمومی به صورت الکترونیکی <span className="text-amber-500 text-[22px] animate-ping"> ● </span> امکان پرداخت از طریق QR code <span className="text-amber-500 text-[22px] animate-ping"> ● </span> امکان پرداخت از طریق
                    کارت بانکی <span className="text-amber-500 text-[22px] animate-ping"> ● </span> امکان انتقال شارژ و اعتبار در داخل اپلیکیشن .
                </p>
                <div className="mt-6 lg:mt-14 flex items-center justify-between lg:justify-start">
                    <button className="w-[148px] lg:w-[164.24px] h-[49px] lg:h-14 px-[30px] py-[13px] bg-blue rounded-tl-[15px] rounded-tr-[3px] rounded-bl-[15px] rounded-br-[15px] shadow justify-center items-center gap-[5px] inline-flex">
                        <span className="text-right text-white text-base font-bold whitespace-nowrap leading-[21.13px]">
                            شروع کنید
                        </span>
                        <Arrow_duotone_Icon className="text-white" />
                    </button>
                    <button className="w-[164.24px] h-14 px-[30px] rounded-tl-[15px] justify-center items-center gap-[5px] inline-flex">    
                    </button>
                </div>
                <div className="items-center hidden lg:flex">
                    <div className="w-[107px] animate-spin-slow self-start mt-28 h-[107px] overflow-hidden bg-slate-900 rounded-full flex justify-center items-center">
                        <div className="flex justify-center items-center flex-col">
                            <Image src={Text} alt="" />
                            <Phone_Icon className="w-5 h-5 text-white" />
                            <Image className="-rotate-180" src={Text} alt="" />
                        </div>
                    </div>
                    <div className="bomb -mt-0"></div>
                </div>
            </div>
            <div className="flex-1   mt-32 lg:mt-0">
                <div className="bg_cover_header mr-auto">
                    
                    <Image
                        className="object-cover -mt-24 md:scale-1.1 lg:scale-[1.3] lg:-mr-[24rem] lg:w-[100%] lg:h-[283.38px]"
                        src={Man}
                        alt="man"
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
