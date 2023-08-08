"use client";
import Menu from "@/components/common/Menu";
import { counterList, linksCounter } from "@/helper/utils/data";
import Link from "next/link";
import React from "react";

const Counter = () => {
    return (
        <div className="grid grid-cols-3 mt-10 w-90 gap-5">
            {linksCounter.map((item, index) => (
                <Link
                    className="w-full h-20  justify-center bg-[#f7f7f7] items-center flex rounded-lg border border-[#e1e1e1]"
                    key={index}
                    href={item.url}
                >
                    <p className="text-center text-[12px] text-[#626262] font-artin-regular">{item.name}</p>
                </Link>
            ))}

            <Menu menu={counterList} />
        </div>
    );
};

export default Counter;
