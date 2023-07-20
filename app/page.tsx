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
          className="mb-5">
          <Link href="/auth/signin">
            <Button name="بزن بریم" />
          </Link>
          <p className="border-b mt-6 border-dashed border-[#e4e4e4]"></p>
          <div className="flex mt-3 gap-1 text-gray-400 font-artin-bold text-[15px] justify-center  items-center">
            <p className="text-gray-500">آماده ای برای کسب درآمد؟</p>
            ورود راننده
          </div>
        </motion.div>
      </div>
    </div>
  )
}
