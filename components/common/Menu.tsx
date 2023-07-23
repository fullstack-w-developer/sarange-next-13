"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
    menu: {
        name: string;
        url: string;
        icon: any;
    }[];
}
const Menu = ({ menu }: Props) => {
    const pathname = usePathname();
    return (
        <div className="flex items-center rounded-t-[24px] justify-center  fixed w-full bottom-0 h-[65px] menu">
            {menu.map((menu, i) => (
                <Link
                    href={menu.url}
                    className={`flex relative flex-1 h-full flex-col items-center justify-center gap-1`}
                    key={i}
                >
                    <menu.icon fill={pathname === menu.url ? "#F67D14" : "#9FA8B1"} size="27" />
                    <p className={`font-artin-bold text-xs ${pathname === menu.url ? "text-[#F67D14]" : "text-[#9FA8B1]"}`}>
                        {menu.name}
                    </p>
                    {pathname === menu.url && <span className="active-menu block absolute bottom-0"></span>}
                </Link>
            ))}
        </div>
    );
};

export default Menu;
