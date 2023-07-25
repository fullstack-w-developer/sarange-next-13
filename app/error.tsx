"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";
import Error500 from "@/assets/images/repier.png"
import Button from "@/components/common/Button";
export default function Error() {


    return (
        <div className="flex justify-center w-90 items-center min-h-screen">
            <div>
                <Image width={300} src={Error500} alt="" />
                <p className="font-artin-bold mt-8 text-xl text-[#222] text-center w-full">با عرض شرمندگی پیج تا اطلاع ثانویه در دست تغییر است <span className="text-orange">خیلی زود بر میگردیم !</span> </p>

                <Button
                    onClick={() => window.location.reload()}
                    className="!bg-orange !mt-16"
                    name="تلاش دوباره"
                />

            </div>
        </div>
    );
}
