"use client"
import React from 'react'
import Getotp from './GetOtp'
import { useFormik } from 'formik';
import { initialValueLogin } from '@/helper/utils/initialValues';
import { validationSchemaGetOtp } from '@/helper/utils/validation/auth';
import { convertObjectEnglishNumber } from '@/helper/utils/converObject';
import { LoginUser } from '@/types/Auth';
import { motion } from "framer-motion"
import Link from 'next/link';
import Button from '@/components/common/Button';
import { animationsScreens } from '@/theme/animations';
import { useRouter } from 'next/navigation';
const Login = () => {
    const router = useRouter()
    const formik = useFormik<LoginUser>({
        initialValues: initialValueLogin,
        validationSchema: validationSchemaGetOtp,
        onSubmit: (values) => {
            const results = convertObjectEnglishNumber(values);
             router.push("/auth/verify")
            // setPhone(values.phone);
            // mutate(results);
        },
    });

    return (
        <motion.div
            className='overflow-hidden min-h-screen flex flex-col gap-20 justify-between'
            {...animationsScreens}
        >
            <Getotp isPass isLogin formik={formik} text="برای ورود لطفا شماره تلفن همراه خود و پسورد  را وارد کنید" />


            <div className="flex flex-col gap-5 mb-5 w-[90%] mx-auto">
                <Button onClick={formik.handleSubmit} className="!bg-gray_black" name="ورود" />
                <p className="border-b border-dashed border-[#e4e4e4]"></p>
                <Link href="/auth/signup">
                    <div className="flex gap-1 text-gray-400 font-estedad-medium text-[12px] justify-center items-center">
                        <p>حساب کاربری ندارید؟</p>
                        ثبت‌نام
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}

export default Login