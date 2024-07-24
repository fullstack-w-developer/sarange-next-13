"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/images/logo.png";
import { Menu_Icon, Phone_Icon } from "@/components/landing/common/Icon";
import { header } from "@/helper/utils/data";
import Link from "next/link";
import Sidebar from "./sidebar";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <header>
            {/* header-top */}
            <div
                style={{ boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.10)" }}
                className="w-[90%] mx-auto bg-header-landing justify-between h-[87px] flex items-center px-5 rounded-bl-[27px] rounded-br-[27px]"
            >
                <Image
                    src={Logo}
                    alt="logo"
                    className="hidden w-[150px] sm:block sm:w-[150px] sm:h-[150px] md:w-[100px] md:h-[100px]"
                />
                <Menu_Icon className="lg:hidden mr-auto" onClick={() => setOpen(true)} />
                <div className="items-center gap-10 hidden lg:flex">
                    <button className="w-[136px] h-[47px] px-[30px] py-[13px] bg-blue rounded-tl-[15px] rounded-tr-[3px] rounded-bl-[15px] rounded-br-[15px] justify-center items-center gap-[5px] inline-flex">
                        <span className="text-right text-white text-sm font-bold leading-[17.78px]">نسخه آنلاین</span>
                    </button>
                    <div className="w-[2px] h-[45px] opacity-20 bg-black" />
                    <div className="flex flex-col items-center">
                        <span className="text-slate-900 text-lg font-extra_num_bold font-bold text-center"> پشتیبانی </span>
                        <span className="opacity-50 text-slate-800 text-lg font-num_bold"> 36266464 - 044 </span>
                    </div>
                    <Phone_Icon className="text-blue w-8 h-8 " />
                </div>
            </div>

            {/* header-bootom */}
            <div className="w-[75%] mx-auto h-[62px] bg-no-repeat bg-cover rounded-bl-[26px] flex lg:justify-center items-center rounded-br-[26px] bg_header !bg-yellow">
                <div className="w-full flex justify-between px-2 items-center pt-1 lg:hidden">
                    <div>
                        <p className="text-lg font-num_bold !text-white">
                            0905<span className="text-init">2549459</span>
                        </p>
                        <p className="opacity-50 text-right !text-white text-[12.80px] font-normal ">پشتیبانی سریع</p>
                    </div>
                    <Link
                        href={"/wellcome"}
                        className="w-[150px] h-[35px] lg:w-[93.80px] lg:h-[28.92px] px-[12.73px] py-[3.47px] bg-white rounded-2xl justify-center items-center gap-[5.78px] inline-flex"
                    >
                        <span className="text-center text-slate-800 text-[15px] font-semibold"> ورود / ثبت‌نام</span>
                    </Link>
                </div>
                <div className=" hidden lg:flex justify-center items-center gap-14 ">
                    {header.map((item, idx) => (
                        <Link href={item.url} key={idx} className="text-right block text-white text-[17px] font-semibold">
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
            <Sidebar open={open} setOpen={setOpen} />
        </header>
    );
};

export default Header;
