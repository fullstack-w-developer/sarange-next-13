"use client";
import React from "react";
import Lottie from "lottie-react";
import Car from "@/assets/images/car.json";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import { BsQrCode } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import Link from "next/link";
const SectionUserPage = () => {
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
                    <Link className="!flex-1 !block" href="/user/scan">
                        <Button icon={<BsQrCode size={18} />} name="پرداخت با اسکن" />
                    </Link>
                    <Link className="!flex-1 !block" href="/user/citynumber">
                        <Button
                            className="!bg-transparent custom_btn !text-black"
                            icon={<AiFillCar size={22} />}
                            name="پرداخت با کد شهری"
                        />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default SectionUserPage;
