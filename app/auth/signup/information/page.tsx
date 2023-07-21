"use client";
import Input from "@/components/common/Input";
import React from "react";
import Button from "@/components/common/Button";
import { BsFillLockFill } from "react-icons/bs";
import { sexPerson } from "@/helper/utils/data";
import CustomRadioButton from "./CustomRadioButton";
import { initialValuesSignUpUser } from "@/helper/utils/initialValues";
import { validationSchemaSignUp } from "@/helper/utils/validation/auth";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { animationsScreens } from "@/theme/animations";
import { convertObjectEnglishNumber } from "@/helper/utils/converObject";
import useAuthStore from "@/stores/auth-store";
import useSignupUserMutation from "@/hooks/mutation/auth/useSignupUserMutation";
const Information = () => {
    const { mutate, isLoading } = useSignupUserMutation();
    const { user } = useAuthStore();
    const formik = useFormik({
        initialValues: initialValuesSignUpUser,
        validationSchema: validationSchemaSignUp,
        onSubmit: async (values) => {
            const results = await convertObjectEnglishNumber(values);
            mutate({ ...results, phone: user?.phone });
        },
    });
    return (
        <motion.div {...animationsScreens} className="flex-1 h-full flex justify-between gap-14 flex-col">
            <div className="w-90 mt-8">
                <h1 className="text-center text-black font-artin-black text-lg ">برای تکمیل ثبت نام اطلاعات خود را وارد کنید.</h1>
                <form autoComplete="off" className="mt-12  flex flex-col gap-3">
                    <input type="text" id="xusername" style={{ display: "none" }} autoComplete="username" />
                    <input type="password" id="xpassword" style={{ display: "none" }} autoComplete="current-password" />
                    <Input
                        formik={formik}
                        name="firstName"
                        placeholder="برای مثال: بهار"
                        classInput="bg-[#EFF2F6]"
                        label="نام خود را وارد کنید"
                    />
                    <Input
                        formik={formik}
                        name="lastName"
                        placeholder="برای مثال: دهقانی"
                        classInput="bg-[#EFF2F6]"
                        label="نام خانوادگی خود را وارد کنید"
                    />

                    <Input
                        type="password"
                        ltr
                        formik={formik}
                        name="password"
                        classInput="bg-[#EFF2F6] border-[1.5px] border-gray-300"
                        label="رمز عبور"
                        icon={<BsFillLockFill size={24} />}
                    />
                    <Input
                        type="password"
                        ltr
                        formik={formik}
                        name="repPassword"
                        classInput="bg-[#EFF2F6] border-[1.5px] border-gray-300"
                        label="تکرار رمز عبور"
                        icon={<BsFillLockFill size={24} />}
                    />
                    <CustomRadioButton list={sexPerson} formik={formik} name="sex" />
                </form>
            </div>
            <div className="w-90 mb-4">
                <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!bg-[#464646]" name="ثبت نام" />
            </div>
        </motion.div>
    );
};

export default Information;
