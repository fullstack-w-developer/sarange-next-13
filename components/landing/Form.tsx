"use client";
import React from 'react'
import Input from '@/components/landing/common/Input'
import { Call_Icon, Chat_Icon, Message_Icon, User_Icon } from '@/components/landing/common/Icon'
import { IoIosArrowRoundBack } from "react-icons/io";

import Textarea from '@/components/landing/common/Textarea'

const Form = () => {
    return (
        <div className='w-full flex-1 px-4 lg:px-6 flex flex-col lg:flex-row gap-10 py-5 overflow-hidden justify-end items-center bg-white rounded-xl lg:rounded-3xl relative'>
            <div className='flex flex-col lg:gap-3  lg:-mt-32'>
                {/* <p className="whitespace-nowrap h-fit lg:w-4 lg:rotate-90 opacity-10 text-slate-700 text-[21.78px] font-normal">Send Message</p> */}
                <p className="whitespace-nowrap h-fit lg:w-4 lg:rotate-90 text-slate-900 text-2xl font-black ">ارســـال پــیـــام</p>
            </div>
            <form className='w-full lg:w-[70%] flex flex-col gap-6'>
                <Input IconLeft={Call_Icon} placeholder='تماس با ما' />
                <Input IconLeft={Message_Icon} placeholder='موضوع پیام' />
                <Input IconLeft={User_Icon} placeholder='نام‌ و نام‌خانوادگی' />
                <Textarea IconLeft={Chat_Icon} placeholder='پیام شما' />
                <button className="w-full h-[60px] px-3.5 py-2.5 bg-slate-900 rounded-[18px] justify-center items-center gap-[17px] inline-flex">
                    <span className="text-center text-white text-base font-bold">ارسال پیام</span>
                    <IoIosArrowRoundBack className='text-white w-8 h-8'/>
                </button>
            </form>
        </div>
    )
}

export default Form