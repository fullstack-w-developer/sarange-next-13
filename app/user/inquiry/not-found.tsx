import React from "react";
import { Warr_iocn } from "@/components/icons/icons";
import Button from "@/components/common/Button";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full">
                <div className="flex flex-col items-center">
                    <Warr_iocn size="37" />
                    <p className="text-center text-orange font-artin-bold pt-5 text-xl">راننده‌ای با این کد شهری یافت نشد</p>
                </div>

                <div className="w-90 pb-6 flex justify-center gap-4 mt-20 items-center ">
                    <Link className="min-w-[45%] block" href="/user/citynumber">
                        <Button icon={<GoArrowRight size={22} />} name="تلاش دوباره" className="!bg-orange flex-1 text-white" />
                    </Link>
                    <Link className="min-w-[45%] block" href="/user">
                        <Button className="custom_btn flex-1 !bg-transparent text-black " name="بازگشت به خانه" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
