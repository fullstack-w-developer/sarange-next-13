"use client";
import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const MoreMenu = ({list}:any) => {
    return (
        <div>
            {list.map((menu:any, i:any) => (
                <div key={i} className="flex border-b py-4  border-gray-200 items-center justify-between">
                    <Link href={menu.url} className="flex gap-2  items-center">
                        <menu.icon size={26} color="#626262" />
                        <p className="font-artin-regular text-[16px] text-[#222222]">{menu.name}</p>
                    </Link>

                    <MdArrowBackIosNew color="#626262" size={18} />
                </div>
            ))}
        </div>
    );
};

export default MoreMenu;
