"use client"
import React from "react";
import Lottie from "lottie-react";
import Car from "@/assets/images/car.json";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import { BsQrCode } from "react-icons/bs";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
const SectionDriverPage = () => {
    return (
        <div className="w-90 h-[70vh] flex justify-center items-center overflow-hidden">
            <div className="flex flex-col gap-14">
                <div>
                    <Lottie animationData={Car} />
                </div>
                <motion.div
                    className="flex w-full items-center gap-5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Link className="!flex-1 !block" href="/driver/scan">
                        <Button icon={<BsQrCode size={18} />} name="اسکن کارت" />
                    </Link>
                    <Link className="!flex-1 !block" href="/driver/username">
                        <Button
                            className="!bg-transparent custom_btn !text-black"
                            icon={<BiUser size={22} />}
                            name="پرداخت با نام کاربری"
                        />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionDriverPage;
