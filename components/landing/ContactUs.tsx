"use client";

import React from "react";
import ContantUs from "@/public/images/contant_us.png";
import Image from "next/image";
import Form from "./Form";
import CardInfoContact from "./CardInfoContact";
import Map from "../../public/images/appIcon/map1.png";
import Call from "../../public/images/appIcon/call.png";
import Post from "../../public/images/appIcon/post.png";
import { cardInfo, social_media } from "@/helper/utils/data";
const ContactUs = () => {
    return (
        <div className="mt-20 lg:mt-[40px]">
            <div className="flex justify-end md:invisible">
                <Image className="w-[30%] h-[30%]" src={ContantUs} alt="" />
            </div>
            <div className="bg-[#3a3a6b] -mt-[35px] lg:-mt-[8.33rem] py-8 h-fit relative">
                <div className="relative z-[9999] lg:z-0 lg:mr-[180px]">
                    <div className="w-[85%] sm:w-[90%] mx-auto lg:w-[66%] lg:mr-[19%]">
                        <div className="flex flex-col lg:flex-row gap-6">
                            <Form />
                            <div className="flex flex-col gap-6 items-center">
                                {cardInfo.map((item, idx) => (
                                    <CardInfoContact item={item} key={idx} />
                                ))}
                            </div>
                        </div>
                        <div className="sm:w-[90%] md:w-[100%] lg:w-[73%] mt-7 lg:mt-0 mr-auto">
                            <div className="bg-white rounded-xl relative p-2 pr-10 my-4">
                                <Image
                                    src={Map}
                                    alt="iconmap"
                                    className="border-solid border-1 p-1 border-amber-400 bg-slate-900 bg-opacity-85 rounded-md w-10 h-10 lg:w-12 lg:h-12 absolute -right-5 lg:-right-6 lg:top-4"
                                />
                                <p className="text-right text-slate-800 text-sm lg:text-lg font-black">آدرس دفتر</p>
                                <p className="opacity-50 text-right text-slate-900 text-xs lg:text-base font-light">
                                    آستان آذربایجان غربی - خوی - خیابان صمدزاده - جنب ساختمان شهرداری قدیم
                                </p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
                                <div className="bg-white flex-1 rounded-xl relative p-2 pr-12 lg:pr-10">
                                    <Image
                                        src={Call}
                                        alt="iconmap"
                                        className="border-solid border-1 p-1 border-amber-400 bg-slate-900 bg-opacity-85 rounded-md w-10 h-10 lg:w-12 lg:h-12 absolute -right-5 lg:-right-6 lg:top-4"
                                    />
                                    <p className="text-right text-slate-800 text-sm lg:text-lg font-black">044-36266464</p>
                                    <p className="opacity-50 text-right text-slate-900 text-xs lg:text-base font-light ">
                                        پشتیبانی ۲۴ ساعته
                                    </p>
                                </div>
                                <div className="bg-white flex-1 items-center rounded-xl relative p-2 pr-10 ">
                                    <Image
                                        src={Post}
                                        alt="iconmap"
                                        className="border-solid border-1 p-1 border-amber-400 bg-slate-900 bg-opacity-85 rounded-md w-10 h-10 lg:w-12 lg:h-12 absolute -right-5 lg:-right-6 lg:top-4"
                                    />
                                    <p className="text-right text-slate-800 text-sm lg:text-lg font-black">ایمیل پشتیبانی</p>
                                    <p className="opacity-50 text-right text-slate-900 text-xs lg:text-base font-light ">
                                        TaxiSarang@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg_contact_our !z-50 !right-0">
                    <div className="w-[65%] mt-7 flex flex-col gap-2 mr-10 ml-auto">
                        <div className="w-[33.27px] h-[4.16px] bg-init rounded-3xl" />
                        <p className="text-right text-white text-xl lg:text-3xl font-black">تماس با ما</p>
                        <p className="text-right -mt-2 text-slate-700 text-lg lg:text-[37.40px] font-regular">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-20">
                        <div className="map hidden lg:block">
                            <iframe
                                className="w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d6243.322025400049!2d44.954728694642554!3d38.5494337372016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d38.5462047!2d44.9562734!4m3!3m2!1d38.552871499999995!2d44.960603!5e0!3m2!1sen!2s!4v1706085027138!5m2!1sen!2s"
                            ></iframe>
                        </div>
                        <div className="hidden lg:flex items-center justify-around mx-auto mb-20 w-[90%]">
                            {social_media.map((social_media, idx) => (
                                <a
                                    key={idx}
                                    className="w-[58px] cursor-pointer flex justify-center items-center h-[54px] border-r-2 border-zinc-300 mr-1 shadow-md hover:bg-amber-500 hover:scale-[1.14] hover:-translate-y-2 hover:shadow-slate-300 hover:shadow-inner transition-all duration-300 rounded-full p-1"
                                >
                                    <Image width={100} height={100} src={social_media.src} alt="icon" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
