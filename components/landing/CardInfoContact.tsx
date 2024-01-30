import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
type Props ={
    item:{
        title:string,
        count:number,
        src:string | StaticImport,
    }
}


const CardInfoContact = ({item}:Props) => {

    return (
        <div className="w-[100%] sm:w-[70%] h-[90px] lg:w-[100%] md:mx-auto lg:h-[107px] p-7 bg-slate-900 rounded-xl lg:rounded-[28px] justify-center sm:justify-between md:justify-between items-center gap-[23px] inline-flex">
            <div>
                <Image src={item.src} alt="item" width={90} height={90} />
            </div>
            <div className="flex flex-col">
                <span className="opacity-95 text-right text-amber-500 text-xs lg:text-lg font-light leading-[30.38px]">
                    {item.title}
                </span>
                {/* <span className="text-right text-white lg:text-[19px] font-black leading-[47.74px]">{item.count} ***</span> */}
            </div>
        </div>
    );
};

export default CardInfoContact;
