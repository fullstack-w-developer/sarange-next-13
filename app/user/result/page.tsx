"use client"
import Button from '@/components/common/Button'
import { Check_iocn } from '@/components/icons/icons'
import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/images/logo_white.svg"
import ResultImage from "@/assets/images/result.svg"
import { motion } from "framer-motion"
const Result = () => {
    return (
        <div className="h-screen bg-white flex relative flex-col justify-between">
            <motion.div
                initial={{ height: 240, opacity: 0 }}
                animate={{ height: 120, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`bg-[#F57D0E] flex  rounded-b-[28px] shadow-md px-4 transition-all duration-[1.2s] justify-center items-center`}
            >


                <div className={`flex flex-1 w-full flex-col justify-center items-center gap-4 `}>
                    <h1 className={` font-artin-black whitespace-nowrap text-white transition-all duration-1000 text-2xl `}>
                        پرداخت انجام شد
                    </h1>
                    <Check_iocn />
                </div>
                <motion.div
                    initial={{ width: 150, height: 150, position: "relative" }}
                    animate={{ width: 100, height: 100, position: "relative" }}
                    transition={{duration:1}}
                >
                    <Image fill src={ResultImage} alt="" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ x: 500 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="w-90 mb-4"
            >
                <Button className="!bg-[#464646]" name="بازگشت به صحفه اصلی" />
            </motion.div>
        </div>
    )
}

export default Result