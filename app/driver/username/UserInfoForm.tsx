"use client";
import Input from "@/components/common/Input";
import React from "react";
import Info from "./Info";
import ProfileInfo from "@/components/common/ProfileInfo";
import { User } from "@/types/User";
import Button from "@/components/common/Button";
import { GoArrowRight } from "react-icons/go";
import { Warr_iocn } from "@/components/icons/icons";
import { initialValuesPayWithCode } from "@/helper/utils/initialValues";
import { validationSchemaPayWitCode } from "@/helper/utils/validation/pay";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { PaymentTypeEnum } from "@/helper/utils/data";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import Link from "next/link";

const UserInfoForm = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: initialValuesPayWithCode,
        validationSchema: validationSchemaPayWitCode,
        onSubmit: async (values) => {
            router.push(`/driver/inquiry?phone=${Number(toEnglishNumber(values.code))}&type=${PaymentTypeEnum.DRIVER_USER_CODE}`);
        },
    });
    return (
        <div className="h-screen flex flex-col justify-between bg-white">
            <div>
                <div className="w-90 mt-10">
                    <Info />
                    <Input formik={formik} type="tel" classInputTag="text-center" label="شماره تلفن همراه" name="code" />
                </div>
            </div>


            <div className="w-90 pb-6 flex gap-4 items-center">
                <Link href="/user">
                    <Button
                        icon={<GoArrowRight />}
                        className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                        name="بازگشت"
                    />
                </Link>
                <Button onClick={formik.handleSubmit} name="پرداخت" className="!bg-green-600  text-white" />
            </div>
        </div>
    );
};

export default UserInfoForm;
