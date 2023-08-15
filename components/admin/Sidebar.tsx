"use client";
import logout from "@/assets/images/logout.svg";
import Frame from "@/assets/images/Rectangle.png";
import { toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import Link from "next/link";
import { accessItems, userDashboard } from "@/helper/utils/dataServer";
import UserIcon from "@/assets/images/user.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiArrowFromRight } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
interface Props {
    dashboardAdmin: any[]
}
export default function Sidebar({ dashboardAdmin }: Props) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const access = dashboardAdmin[0]?.Attributes?.find((menu: any) => menu.Value === "access")
    return (
        <div className="bg-white hidden border border-gray-200  lg:py-4 px-2 h-fit rounded-lg lg:flex lg:flex-col justify-between items-center">
            <div className="w-full">
                <div className="bg-[#EBE7FD] rounded-lg hidden lg:block">
                    {" "}
                    <div className="relative">
                        <div
                            className="font-artin-regular h-[60px] rounded-xl  flex justify-center items-center  bg-center bg-cover w-full"
                            style={{
                                backgroundImage: `url(${Frame.src})`,
                            }}
                        ></div>
                        <span className=" w-[56px] flex h-[56px] border-4 border-white rounded-[100%] absolute -bottom-6 left-1/2 -translate-x-1/2 z-[9999] ">
                            <Image className="w-[48px] h-[48px] overflow-hidden rounded-[100%]" src={UserIcon} alt="" />
                        </span>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 py-3 mt-5">
                        <p className="font-artin-regular text-[#222222]">{"آدمین"}</p>
                        <p className="font-artin-regular text-[#626262]">{toFarsiNumber("")}</p>
                    </div>
                </div>
                <ul className="hidden w-full lg:block mt-10 space-y-3">
                    {dashboardAdmin[0].Attributes.map((item: any, index: any) => {
                        if (item.Value === "access") return
                        return (
                            <li key={index}>
                                <Link
                                    href={`/admin/${item.Value}`}
                                    className={`flex gap-4 items-center px-6 mx-2 py-2 text-[14px] ${pathname === `/admin/${item.Value}`
                                        ? "font-artin-bold text-[#1F0990] after:rounded-xl relative after:absolute after:right-0 after:w-[3px] after:h-6 after:bg-[#02D0FF]"
                                        : "font-artin-regular text-[#222222]"
                                        }`}
                                >
                                    {/* {true ? <item.iconFill /> : <item.icon />} */}
                                    {item.Name}
                                </Link>
                            </li>
                        );
                    })}
                    {access &&
                        <div className="flex flex-col items-center justify-between">
                            <button onClick={()=> setOpen(!open)} className={`flex justify-between w-full gap-4 items-center px-6 mx-2 py-2 text-[14px] ${open ? "font-artin-bold text-[#1F0990] after:rounded-xl relative after:absolute after:right-0 after:w-[3px] after:h-6 after:bg-[#02D0FF]"
                                : "font-artin-regular text-[#222222]"
                                }`}>

                                {/* {true ? <item.iconFill /> : <item.icon />} */}
                                {access.Name}
                                <IoIosArrowBack className={`transition-all duration-500 ${open? "-rotate-[90deg]" :""}`} />
                            </button>
                            {
                                open &&
                                <ul className="w-full">
                                    {
                                        accessItems.map((access) => (
                                            <li>
                                                <Link
                                                    href={`${access.url}`}
                                                    className={`flex gap-4 px-8 items-center  py-2 text-[14px] ${pathname === `${access.url}`
                                                        ? "font-artin-bold text-[#1F0990] after:rounded-xl relative after:absolute after:right-5 after:w-[3px] after:h-3 after:bg-[#02D0FF]"
                                                        : "font-artin-regular text-[#222222]"
                                                        }`}
                                                >
                                                    {/* {true ? <item.iconFill /> : <item.icon />} */}
                                                    {access.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </div>
                    }
                </ul>
            </div>
            <button className="hidden mt-10 lg:flex gap-2 text-[#DF2040] bg-[#FCE9EC] font-artin-regular py-2 w-[168px] rounded-lg items-center justify-center">
                <Image alt="logout" src={logout} />
                خروج از حساب
            </button>
        </div>
    );
}
