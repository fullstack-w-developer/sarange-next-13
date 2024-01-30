"use client";
import React from 'react'
import CardService from './CardService'
import { ourServices } from '@/helper/utils/data'

const OurServices = () => {
    return (
        <section className="mt-32 lg:-mt-[3.55rem] lg:pb-[4.7rem] relative z-50 bg-yellow bg-opacity-95" >
            <div className='w-[90%] mx-auto lg:p-5 py-10'>
                <span className="lg:pt-0 w-[240px] lg:w-fit mr-auto lg:mr-0 block text-justify text-xs text-white lg:text-base font-semibold  lg:leading-[34.72px]">
                    <span className="lg:text-black text-yellow font-bold">اپلیکیشن سارنگ</span> یک برنامه بومی که با استفاده از دانش بومی جوانان ایرانی <br/> برای سهولت در پرداخت ها بدون نیاز به پول فیزیکی ، پرداخت های خود را انجام دهید<br/> که در کنار این سهولت با امنیت ۱۰۰ درصد تراکنش ها و فعالیت های کاربران صورت گرفته است.</span>
                <div className='grid grid-cols-2 lg:grid-cols-4 mt-10 lg:mt-10 gap-5 lg:gap-10'>
                    {
                        ourServices.map((service, idx) => (
                            <CardService service={service} key={idx} />
                        ))
                    }
                </div>
            </div>
            <div className='bg_our_services'>
                <div className=' w-[60%] lg:w-[65%] mt-7 flex flex-col gap-2 mr-auto'>
                    <div className="w-[33.27px] h-[4.16px] bg-blue rounded-3xl" />
                    <p className="text-right text-white text-sm lg:text-3xl font-black">خدمات ما</p>
                </div>
            </div>
        </section>
    )
}

export default OurServices