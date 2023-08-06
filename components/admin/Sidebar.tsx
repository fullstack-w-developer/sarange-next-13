import logout from "@/assets/images/logout.svg";
import Frame from "@/assets/images/Rectangle.png";
import { toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import Link from "next/link";
import { userDashboard } from "@/helper/utils/dataServer";
import UserIcon from "@/assets/images/user.png"
import Image from "next/image";
import { User } from "@/types/User";

export default function Sidebar() {

    return (
        <div className="bg-white hidden border border-gray-200  lg:py-4 px-2 h-[556px] rounded-lg lg:flex lg:flex-col justify-between items-center">
            <div>
                <div className="bg-[#EBE7FD] rounded-lg hidden lg:block">
                    {" "}
                    <div className="relative">
                        <div
                            className="font-artin-regular h-[60px] rounded-xl  flex justify-center items-center  bg-center bg-cover w-full"
                            style={{
                                backgroundImage: `url(${Frame.src})`,
                            }}
                        >
                          
                        </div>
                        <span className=" w-[56px] flex h-[56px] border-4 border-white rounded-[100%] absolute -bottom-6 left-1/2 -translate-x-1/2 z-[9999] ">
                                <Image
                                    className="w-[48px] h-[48px] overflow-hidden rounded-[100%]"
                                    src={UserIcon}
                                    alt=""
                                />
                            </span>
                    </div>


                    <div className="flex flex-col justify-center items-center gap-3 py-3 mt-5">
                        <p className="font-artin-regular text-[#222222]">
                            {"آدمین"}
                        </p>
                        <p className="font-artin-regular text-[#626262]">{toFarsiNumber("")}</p>
                    </div>
                </div>
                <ul className="hidden lg:block mt-10 space-y-8">
                    {userDashboard.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link
                                    href={item.url}
                                    className={`flex gap-4 items-center px-6 mx-2 py-2 text-[14px] ${true
                                        ? "font-artin-bold text-[#1F0990] after:rounded-xl relative after:absolute after:right-0 after:w-[3px] after:h-6 after:bg-[#02D0FF]"
                                        : "font-artin-regular text-[#222222]"
                                        }`}
                                >
                                    {true ? <item.iconFill /> : <item.icon />}
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <button
                className="hidden lg:flex gap-2 text-[#DF2040] bg-[#FCE9EC] font-artin-regular py-2 w-[168px] rounded-lg items-center justify-center"
            >
                <Image alt="logout" src={logout} />
                خروج از حساب
            </button>
        </div>
    );
}
