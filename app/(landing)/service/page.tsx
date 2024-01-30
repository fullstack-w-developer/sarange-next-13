import React from "react";

const Servic = () => {
    return (
        <div className="flex justify-center mt-25 lg:mt-[135px] relative w-[90%] mx-auto">
            <div className="w-[100%] bg-[#3a3a6b] h-fit p-3 rounded-md z-0 mt-28 lg:mt-4">
                <div className="bg_contact_our2 !right-0 -z-[1]">
                    <p className="text-right text-white text-xl lg:text-3xl font-black p-5"> خدمات ما </p>
                </div>
                <div className="flex justify-end">
                    <div className="w-[100%] md:w-[80%] z-[999] bg-white shadow-md shadow-slate-600 flex flex-col items-center p-4 ml-5 mt-5 bg-opacity-90 rounded-lg h-fit">
                        <div className="w-full mb-8">
                            <p className="w-[70%] border-t-[3px] pt-0 py-2 border-amber-300 mr-auto"></p>
                            <p className="w-[85%] border-t-[2px] pt-0 py-2 border-amber-300 mr-auto"></p>
                            <p className="w-full border-t-[1px] pt-0 py-2 border-amber-300 mr-auto"></p>
                        </div>
                        <p className="p-1 -mt-2 font-black text-lg text-justify leading-10">
                            <span className="text-yellow font-bold">اپلیکیشن سارنگ</span> با ارائه برخی سرویس هایی که به صورت
                            روزانه و ماهانه برای هر فردی ضرورت پیدا میکند و ارائه آنها در قالب یک اپ جامع علاوه برایجاد سهولت و
                            دسترسی برای کاربران و هدایایی برای آنها در نظر گرفته است تا با استفاده از این امکانات بتوانند دروقت
                            خود صرفه جویی کنند و هم از خدمات لذت ببرند
                        </p>
                    </div>
                </div>
                <p className="p-5 mt-2 shadow-inner shadow-slate-400 font-black text-md text-right bg-slate-900 text-white rounded w-[75%] md:[60%] mr-auto">
                    ارائه گزارش‌ها و نمودار‌های کیفی و کمی جهت مدیریت همه‌جانبه
                </p>
                <p className="p-5 mt-2 shadow-inner shadow-slate-400 font-black text-md text-right bg-slate-900 text-white rounded w-[75%] md:[60%] mr-auto">
                    بالا‌ترین نرخ موفقیت تراکنش‌ها با سرویس فراخوانی خودکار
                </p>
                <p className="p-5 mt-2 shadow-inner shadow-slate-400 font-black text-md text-right bg-slate-900 text-white rounded w-[75%] md:[60%] mr-auto">
                    مدیریت و مانیتور لحظه ای
                </p>
            </div>
        </div>
    );
};

export default Servic;
