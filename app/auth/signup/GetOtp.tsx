"use client";
import Link from "next/link";
import React from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { initialValuesGetOtp } from "@/helper/utils/initialValues";
import { validationSchemaGetOtp } from "@/helper/utils/validation/auth";
import Getotp from "../signin/GetOtp";
import { Warr_iocn } from "@/components/icons";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";
import { animationsScreens } from "@/theme/animations";
import useGetCodeActivationQuery from "@/hooks/query/auth/useGetCodeActivationQuery";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import useAuthStore from "@/stores/auth-store";
const GetOtp = () => {
    const { setUser } = useAuthStore();
    const formik = useFormik({
        initialValues: initialValuesGetOtp,
        validationSchema: validationSchemaGetOtp,
        onSubmit: async (values) => {
            await setUser({ user: { phone: toEnglishNumber(values.phone) } });
            refetch();
        },
    });
    const { refetch, isLoading, isError, error } = useGetCodeActivationQuery();

    return (
        <>
            <motion.div {...animationsScreens} className="min-h-screen flex flex-col justify-between">
                <Getotp formik={formik} text="برای ثبت نام لطفا شماره تلفن همراه خود را وارد کنید" />

                {isError && (
                    <div className="flex flex-col gap-3 items-center -mt-10 justify-center">
                        <Warr_iocn />
                        {/* @ts-ignore */}
                        <p className="text-center text-orange font-artin-light">{error?.response?.data?.Message}</p>
                    </div>
                )}

                <div className="flex flex-col mb-4 w-90">
                    <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!bg-gray_black" name="ثبت نام" />
                    <p className="border-b mt-6 mb-3 border-dashed border-[#e4e4e4]"></p>
                    <Link href="/auth/signin">
                        <div className="flex gap-1 text-gray-400 font-estedad-medium text-[12px] justify-center items-center">
                            <p>حساب کاربری دراید؟</p>
                            ورود
                        </div>
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default GetOtp;
