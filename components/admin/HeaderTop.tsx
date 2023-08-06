import Image from "next/image";
import NastaliqOnline from "@/assets/images/NastaliqOnline.png";
import Frame from "@/assets/images/bg_header.png";
import Vector from "@/assets/images/Vector.svg";
import sms from "@/assets/images/sms.svg";
import CurrentTime from "./CurrentTime";
export default function HeaderTop() {
    let options = { year: "numeric", month: "long", day: "numeric" };

    return (
        <div
            className="bg-[#1F0990] py-4 px-4 text-[10px] lg:text-[14px] lg:px-16 bg-center bg-cover w-full lg:h-[64px]"
            style={{
                backgroundImage: `url(${Frame.src})`,
            }}
        >
            <Image alt="" src={NastaliqOnline} className="block lg:hidden mx-auto" />
            <div className="flex justify-between items-center">
                <div className="flex font-artin-regular  items-center gap-6 text-white">
                    <Image alt="" src={NastaliqOnline} className="hidden lg:block" />
                    <div className="gap-2 flex ">
                        <p className="flex gap-1 lg:gap-2">
                            <span>امروز</span>
                            {/* @ts-ignore */}
                            <span>{new Date().toLocaleDateString("fa-IR", options)}</span>
                        </p>
                        <div className="w-[0.5px] h-5 bg-gray-500"></div>
                        <p className="flex gap-1 lg:gap-2">
                            <span>ساعت</span>
                            <CurrentTime />
                        </p>
                    </div>
                </div>
                <div className="flex font-es-medium items-center gap-5 text-white">
                    <div className="hidden lg:flex gap-5 items-center">
                        <p className="flex items-center gap-3">
                            info@khstp.ir
                            <Image alt="" src={sms} />
                        </p>
                        <div className="w-[0.5px] h-5 bg-gray-500"></div>
                        <p className="flex font-artin-regular items-center gap-3">
                            ۰۶۱-۳۸۵۰
                            <Image alt="" src={Vector} />
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
