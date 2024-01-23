"use client";
import Image from "next/image";
import Logo from "@/assets/images/logo_white.svg";
import { BsArrowLeftShort } from "react-icons/bs";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { initialValuesCheckCode } from "@/helper/utils/initialValues";
import { validationSchemaCheckCode } from "@/helper/utils/validation/auth";
import Timer from "./Timer";
import Otp from "./Otp";
import { motion } from "framer-motion";
import { animationsScreens } from "@/theme/animations";
import useVerifyCode from "@/hooks/mutation/auth/useVerifyCode";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import useAuthStore from "@/stores/auth-store";
import { Edit_icon, Phone_icon, Warr_iocn } from "@/components/icons/icons";
import Link from "next/link";
import { useState } from "react";
import { errorToast } from "@/helper/utils/error";

const VerifyOtp = () => {
    const [code, setCode] = useState({
        field1: "",
        field2: "",
        field3: "",
        field4: "",
    });
    const { user } = useAuthStore();
    const { mutate, isError, error, isLoading } = useVerifyCode();
    const router = useRouter();
    const formik = useFormik({
        initialValues: initialValuesCheckCode,
        onSubmit: (values) => {
            const { field1, field2, field3, field4 } = code;
            const newCode = `${field1}${field2}${field3}${field4}`;
            if (newCode.length !== 4) return errorToast("لطفا کد ارسال شده را وارد کنید");
            mutate({ Code: Number(newCode), Phone: toEnglishNumber(user?.phone!)! });
        },
    });



    return (
        <motion.div {...animationsScreens} className="flex flex-col justify-between h-screen">
            <div className="bg_header text-white rounded-b-[26px] overflow-hidden container_header_signup">
                <div className=" py-14 flex  w-90  items-center justify-between">
                    <div className="flex z-50 gap-3 items-center justify-between">
                        <Image className="w-12 h-12" src={Logo} alt="" />
                        <p className="font-artin-regular text-xl">سارنگ</p>
                    </div>
                    <button className="z-[9999]" onClick={() => router.back()}>
                        <BsArrowLeftShort size={34} />
                    </button>
                </div>
            </div>

            <div>
                <div className="w-full px-6">
                    <div className="flex items-center gap-2">
                        <Phone_icon size="19" fill="#464646" />
                        <p className="font-artin-regular text-lg text-black">لطفا کد ارسال شده را وارد کنید</p>
                    </div>
                    <Otp code={code} setCode={setCode} />
                    <div className="flex justify-between items-center mt-8">
                        <Timer />
                        <Link href="/auth/signin" className="flex items-center gap-1">
                            <Edit_icon fill="#F67D14" />
                            <p className="font-artin-regular text-[12px] text-orange">تغیر شماره تلفن</p>
                        </Link>
                    </div>
                </div>
            </div>
            {isError && (
                <div className="flex justify-center items-center flex-col">
                    <Warr_iocn fill="#F67D14" />
                    {/* @ts-ignore */}
                    <p className="text-orange font-artin-regular">{error.response?.data?.Message}</p>
                </div>
            )}

            <span></span>
            <div className="w-90 mb-4">
                <Button isLoading={isLoading} onClick={formik.handleSubmit} className=" !bg-[#464646]" name="تائید کد" />
            </div>
        </motion.div>
    );
};

export default VerifyOtp;
