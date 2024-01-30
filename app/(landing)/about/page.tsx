import React from "react";

const About = () => {
    return (
        <div className="flex justify-center w-full mt-25 lg:mt-[135px] relative">
            <div className="w-[100%] bg-[#3a3a6b] h-fit p-3 rounded-md z-0 mt-28 lg:mt-4">
                <div className="bg_contact_our2 !right-0 -z-[1]">
                    <p className="text-right text-white text-xl lg:text-3xl font-black p-5"> درباره ما </p>
                </div>
                <div className="flex justify-end">
                    <div className="w-[100%] md:w-[80%] z-[999] bg-white shadow-md shadow-slate-600 flex flex-col items-center p-4 ml-5 mt-5 bg-opacity-90 rounded-lg h-fit">
                        <div className="w-full mb-8">
                            <p className="w-[70%] border-t-[3px] pt-0 py-2 border-amber-300 mr-auto"></p>
                            <p className="w-[85%] border-t-[2px] pt-0 py-2 border-amber-300 mr-auto"></p>
                            <p className="w-full border-t-[1px] pt-0 py-2 border-amber-300 mr-auto"></p>
                        </div>
                        <p className="p-1 -mt-2 font-black text-lg text-justify leading-10">
                            <span className="text-yellow text-justify">
                                <span className="text-slate-900">اپلیکیشن ســـــارنگ</span> ، توسط بهتریـــــــــن برنامه نویسان
                                با جدیدتـــــــرین پروتکل‌های امنیتـــــــــی طراحی شده 
                            </span> 
                            ، استفاده از خدمات سارنگ بر مبنای قوانین جمهوری اسلامی ایران و با طور خاص بر مبنای قانون تجارت
                            الکترونیک و قانون حمایت از حقوق مصرف کنندگان می باشد. -مالکیت معنوی اطلاعات موجود در سایت ،لوگو ، برند
                            و تمامی محتویات آن متعلق به شرکت بهار (بهاران هدایت ارتباط رسا) می باشد و هرگونه سو استفاده از این
                            اطلاعات سایت پیگیر قانوني می باشد - اپلیکیشن سارنگ به هیچ وجه اطلاعات منحصربفرد کاربران را به اشخاص
                            غیر واگذار نخواد کرد و ضمنا با استفاده از آخرین فناوری روز حتی المقدور از حریم شخصی کاربران دفاع میکند
                        </p>
                    </div>
                </div>
                <p className="p-5 mt-2 shadow-inner shadow-slate-400 font-black text-md text-right bg-slate-900 text-white rounded w-[75%] md:[60%] mr-auto">
                    اپلیکیشن سارنگ دارای مجوزهای علمی و رایانه ای
                </p>
                <p className="p-5 mt-2 shadow-inner shadow-slate-400 font-black text-md text-right bg-slate-900 text-white rounded w-[75%] md:[60%] mr-auto">
                    گواهینامه ای اینماد (نماد اعتماد الکترونیکی)
                </p>
                <p className="p-5 mt-2 shadow-inner shadow-slate-400 font-black text-md text-right bg-slate-900 text-white rounded w-[75%] md:[60%] mr-auto">
                    اپلیکیشن سارنگ دارای مجوز کسب و کارهای اصناف رایانه ای کشور
                </p>
            </div>
        </div>
    );
};

export default About;
