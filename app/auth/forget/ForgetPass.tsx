"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";
import Logo from "@/assets/images/logo_white.svg";
import { useFormik } from "formik";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { validationSchemaForgetPass } from "@/helper/utils/validation/auth";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import { motion } from "framer-motion";
import { animationsScreens } from "@/theme/animations";
import useForgetPassMutation from "@/hooks/mutation/auth/useForgetPassMutation";
import { useEffect } from "react";
import { Warr_iocn } from "@/components/icons/icons";
import Link from "next/link";

const Forgetpass = () => {
    const { mutate, isError, isSuccess, data, error, isLoading } = useForgetPassMutation();
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            phone: "",
        },
        validationSchema: validationSchemaForgetPass,
        onSubmit: (values) => {
            mutate({ phone: toEnglishNumber(values.phone)! });
        },
    });

    useEffect(() => {
        if (isSuccess) {
            formik.resetForm();
        }
    }, [isSuccess]);

    return (
        <motion.div {...animationsScreens} className="bg-white min-h-screen flex flex-col justify-between">
            <div>
                <div className="bg_header text-white rounded-b-[26px] overflow-hidden container_header_signup">
                    <div className=" py-14 flex w-90  items-center justify-between">
                        <div className="flex z-50 gap-3 items-center justify-between">
                            <Image className="w-12 h-12" src={Logo} alt="" />
                            <p className="font-artin-regular text-xl">سارنگ</p>
                        </div>
                        <Link className="z-[9999]" href={"/auth/signin"}>
                            <BsArrowLeftShort size={34} />
                        </Link>
                    </div>
                </div>

                <div className="w-90 mt-20">
                    <h1 className="font-artin-black text-xl">فراموش کردن رمز عبور</h1>
                    <p className="text-gray-400 font-artin-regular pt-1">
                        لطفا شماره تلفن خود را وارد کنید تا رمز عبور برای شما فرستاده شود.
                    </p>
                    <div className="mt-10">
                        <Input ltr classInput="bg-[#EFF2F6]" label="شماره تلفن همراه" formik={formik} name="phone" />
                    </div>
                </div>
            </div>

            {isError && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange font-artin-light">{error?.response.data.Message}</p>
                </div>
            )}
            {isSuccess && (
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Warr_iocn fill="#19B500" />
                    {/* @ts-ignore */}
                    <p className="text-center text-[#19B500] font-artin-light">{data}</p>
                </div>
            )}

            <div className=" w-90 mb-4">
                <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!bg-[#464646]" name="درخواست کد بازیابی" />
            </div>
        </motion.div>
    );
};

export default Forgetpass;
