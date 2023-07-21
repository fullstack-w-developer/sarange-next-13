"use client";
import {useEffect} from "react";
import Getotp from "./GetOtp";
import { useFormik } from "formik";
import { initialValueLogin } from "@/helper/utils/initialValues";
import { validationSchemaGetOtp } from "@/helper/utils/validation/auth";
import { convertObjectEnglishNumber } from "@/helper/utils/converObject";
import { LoginUser } from "@/types/Auth";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { animationsScreens } from "@/theme/animations";
import { useRouter } from "next/navigation";
import useLoginMuation from "@/hooks/mutation/auth/useLoginMuation";
import { Warr_iocn } from "@/components/icons";
import useAuthStore from "@/stores/auth-store";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import useGlobalStore from "@/stores/global-store";


const Login = () => {
    const router = useRouter();
    const { setIsSignupUser, isDriver, setIsDriver } = useGlobalStore();
    const { setUser } = useAuthStore();
    const { mutate, isError, isLoading, error } = useLoginMuation();
    const formik = useFormik<LoginUser>({
        initialValues: initialValueLogin,
        validationSchema: validationSchemaGetOtp,
        onSubmit: (values) => {
            setUser({ user: { phone: toEnglishNumber(values.phone) } });
            const results = convertObjectEnglishNumber(values);
            mutate(results);
        },
    });

    const onClick = () => {
        setIsSignupUser(true);
        router.push("/auth/signup");
    };

    useEffect(()=>{
        setIsSignupUser(false)
        setIsDriver(false)
    },[])

    return (
        <motion.div className="overflow-hidden min-h-screen flex flex-col gap-20 justify-between" {...animationsScreens}>
            <Getotp isPass isLogin formik={formik} text="برای ورود لطفا شماره تلفن همراه خود و پسورد  را وارد کنید" />
            {isError && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange font-artin-light">{error?.response?.data?.Message}</p>
                </div>
            )}

            <div className="flex flex-col mb-4 w-90">
                <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!bg-gray_black" name="ورود" />
                {isDriver === false && (
                    <>
                        <p className="border-b mt-6 mb-3 border-dashed border-[#e4e4e4]"></p>
                        <button
                            onClick={onClick}
                            className="flex gap-1 text-gray-400 font-estedad-medium text-[12px] justify-center items-center"
                        >
                            <p>حساب کاربری ندارید؟</p>
                            ثبت‌نام
                        </button>
                    </>
                )}
            </div>
        </motion.div>
    );
};

export default Login;
