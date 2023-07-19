"use client"
import Image from "next/image";
import Taxi from "@/assets/images/pay.jpg"
import Button from "@/components/common/Button";
import Link from "next/link";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.svg"

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="bg-gray-50/30">
      <div className="layout ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, }}
          animate={{ opacity: 1, scale: 1, }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className={`flex flex-col gap-8 justify-center items-center flex-1 ${isVisible ? "block" : "hidden"}`}
        >
          <Image src={Logo} alt="logo" />
          <motion.h1 className={`font-artin-black text-black text-2xl text-center  `}>به آپلیکیشن سارنگ خوش آمدید</motion.h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, }}
          animate={{ opacity: 1, scale: 1, }}
          transition={{ duration: 1.2, delay: 4.1 }}
          className={`justify-center items-center flex-1 ${isVisible ? "hidden" : "flex"}`}
        >
          <Image width={900} src={Taxi} alt="" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 900 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.9, delay: 4.5 }}
          className="mb-8">
          <Button name="بزن بریم" />
          <div className="flex items-center mt-5 justify-center font-estedad-medium text-[14px] w-full">
            <Link className="flex gap-1 items-center" href="#">آیا  راننده تاکسی هستید؟ <span className="border-b font-artin-regular border-blue-600 text-blue-600">ورود به عنوان راننده</span></Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
