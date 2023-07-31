"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { Warr_iocn } from "@/components/icons/icons";
import { Dialog } from "@mui/material";
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { animationsScreens, variants } from "@/theme/animations";
interface Props {
    formik: any;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isLoading: boolean;
}
const VerifyPay = ({ formik, open, setOpen, isLoading }: Props) => {
    return (
        <Dialog open={open} fullScreen>
            <motion.div {...(open && animationsScreens)}>
                <motion.div variants={variants} className="flex w-90 flex-col justify-between min-h-[99.5vh]">
                    <div className="">
                        <h1 className="text-center font-artin-black py-3 border-b border-gray-200 text-xl">
                            وارد کردن رمز مسافر
                        </h1>
                        <div className="flex justify-center mt-10 text-green-600">
                            <BsShieldFillCheck size={82} />
                        </div>
                        <div className="mt-10">
                            <h1 className="text-red-500 font-estedad-exbold">توجه*</h1>
                            <p className="font-estedad-medium text-[13px] pt-2">
                                برای پرداخت بیش از یک نفر، وراد رمز عبور مسافر الزامی می باشد
                            </p>
                        </div>
                        <form className="my-5">
                            <Input ltr type="password" placeholder="رمز عبور" formik={formik} name="password" label="رمز عبور" />
                        </form>
                    </div>

                    {false && (
                        <div className="flex flex-col gap-3 items-center justify-center">
                            <Warr_iocn />
                            {/* @ts-ignore */}
                            <p className="text-center text-orange_light font-artin-light">{error?.response?.data?.Message}</p>
                        </div>
                    )}

                    <div className=" pb-6 flex gap-4 items-center">
                        <Button
                            onClick={() => setOpen(false)}
                            icon={<GoArrowRight />}
                            className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                            name="بازگشت"
                        />
                        <Button
                            onClick={formik.handleSubmit}
                            isLoading={isLoading}
                            name="پرداخت"
                            className="!bg-green-600  text-white"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </Dialog>
    );
};

export default VerifyPay;
