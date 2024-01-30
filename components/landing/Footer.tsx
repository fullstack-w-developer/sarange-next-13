"use client";

import { social_media } from "@/helper/utils/data";
import Image from "next/image";
import React from "react";
import Nezam from '@/public/images/nezam.png'


const Footer = () => {
    return (
        <footer className="bg-black mt-40 py-10 ">
            <div className="w-[90%] mx-auto">
                <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 justify-between">
                    <div className="md:hidden lg:block flex-1 h-[200px] flex flex-col justify-between">
                        <div className="text-right text-white text-base font-light font-['Yekan Bakh FaNum'] leading-[37.76px]">
                            طراحی و پیاده سازی وبسایت و پلتفرم حرفه ای و سئو شده برای بیزینس و کسب و کار های بزرگ با جدیدترین متد
                            و زبان روز دنیا
                        </div>
                        <p className=" text-right text-yellow font-['semibold'] leading-[37.76px]">*** راه های ارتباطی با ما ***</p>
                        <div className="flex justify-start items-center  mt-10 lg:mt-0 gap-2">
                            {social_media.map((social, idx) => (
                                <a
                                    key={idx}
                                    className="w-[58px] cursor-pointer flex justify-center items-center h-[54px] border-r-2 border-zinc-300 mr-1 shadow-md hover:bg-amber-500 hover:scale-[1.14] hover:-translate-y-1  hover:shadow-slate-300 hover:shadow-inner transition-all duration-[250] rounded-full p-1"
                                >
                                    <Image src={social.src} alt="Icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex  items-center gap-5 flex-1 md:justify-center lg:justify-end">
                        <div className="w-[200px] flex justify-center items-center h-[200px] bg-white rounded-lg">
                            {/* @ts-ignore */}
                            <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=431633&Code=5zMxSGsoa7VZduYETMnJO8d3lWaUiK6z'>
                                {/* @ts-ignore */}
                                <img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=431633&Code=5zMxSGsoa7VZduYETMnJO8d3lWaUiK6z' alt='' Code='5zMxSGsoa7VZduYETMnJO8d3lWaUiK6z' />
                            </a>
                        </div>
                        <div className="w-[200px] flex justify-center items-center h-[200px] bg-white rounded-lg">
                            <a target='_blank' href='https://azgharbi.irannsr.org/fa/trade_unit/2503633/swd_id/107816/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D8%A8%D9%87%D8%A7%D8%B1%D8%A7%D9%86-%D9%87%D8%AF%D8%A7%DB%8C%D8%AA-%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7-%D8%B1%D8%B3%D8%A7.html'>
                                <img  src={Nezam.src} alt='' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] my-10 bg-yellow" />
                <div className="mt-7 lg:mt-0 ml-auto">
                    <div className="rounded-xl relative p-2 pr-10 my-4">
                        {/* <Image src={Map} alt="iconmap" className="border-solid border-1 p-1 border-amber-400 bg-slate-900 bg-opacity-85 rounded-md w-10 h-10 lg:w-12 lg:h-12 absolute -right-5 lg:-right-6 lg:top-4" /> */}
                        <p className="text-right text-white text-sm lg:text-lg font-black">آدرس دفتر</p>
                        <p className="opacity-50 text-right text-white text-xs lg:text-base font-light">
                            آستان آذربایجان غربی - خوی - خیابان صمدزاده - جنب ساختمان شهرداری قدیم
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-start gap-5 lg:gap-1">
                        <div className="flex-1 rounded-xl relative p-2 pr-12 lg:pr-10">
                            {/* <Image src={Call} alt="iconmap" className="border-solid border-1 p-1 border-amber-400 bg-slate-900 bg-opacity-85 rounded-md w-10 h-10 lg:w-12 lg:h-12 absolute -right-5 lg:-right-6 lg:top-4" /> */}
                            <p className="text-right text-white text-sm lg:text-lg font-black">044-36266464</p>
                            <p className="opacity-50 text-right text-white text-xs lg:text-base font-light ">
                                پشتیبانی ۲۴ ساعته
                            </p>
                        </div>
                        <div className="flex-1 items-center rounded-xl relative p-2 pr-10 ">
                            {/* <Image src={Post} alt="iconmap" className="border-solid border-1 p-1 border-amber-400 bg-slate-900 bg-opacity-85 rounded-md w-10 h-10 lg:w-12 lg:h-12 absolute -right-5 lg:-right-6 lg:top-4" /> */}
                            <p className="text-right text-white text-sm lg:text-lg font-black">ایمیل پشتیبانی</p>
                            <p className="opacity-50 text-right text-white text-xs lg:text-base font-light ">
                                TaxiSarang@gmail.com
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="w-full h-[2px] my-10 bg-yellow" /> */}
                <p className=" text-center text-gray font-['semibold'] leading-[37.76px]">  کلیه حقوق مادی و معنوی این سایت متعلق به شرکت بهار می باشد . Copyright © 2024 </p>

            </div>
        </footer>
    );
};

export default Footer;
