"use client";
import React from 'react'
import Lottie from "lottie-react";
import Car from "@/assets/images/car.json";
import Button from '@/components/common/Button';
import { motion } from "framer-motion"
import { BsQrCode } from "react-icons/bs"
import { AiFillCar } from "react-icons/ai"
const SectionUserPage = () => {
    return (
        <div className='w-90 h-[70vh] flex justify-center items-center overflow-hidden'>
            <div className='flex flex-col gap-14'>
                <motion.div
                    initial={{ y: -500, scale: 0 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{ duration: 1 }}

                >
                    <Lottie animationData={Car} />
                </motion.div>
                <motion.div
                    className='flex  items-center gap-10'
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Button  icon={<BsQrCode size={18}/>} name='پرداخت با اسکن' />
                    <Button className='!bg-transparent custom_btn !text-black' icon={<AiFillCar size={22}/>} name='پرداخت با کد شهری' />
                </motion.div>
            </div>
        </div>
    )
}

export default SectionUserPage