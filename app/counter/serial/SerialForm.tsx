"use client";
import Input from "@/components/common/Input";
import React from "react";
import Info from "./Info";
import Button from "@/components/common/Button";
import { GoArrowRight } from "react-icons/go";
import { initialValuesPayWithCode } from "@/helper/utils/initialValues";
import { validationSchemaPayWitCode } from "@/helper/utils/validation/pay";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { PaymentTypeEnum } from "@/helper/utils/data";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import Link from "next/link";

const SerialForm = () => {
    const router = useRouter();
    const formik = useFormik({
        initialValues: initialValuesPayWithCode,
        // validationSchema: validationSchemaPayWitCode,
        onSubmit: async (values) => {
            router.push(`/counter/serial/information?id=${toEnglishNumber(values.code)}`);
        },
    });
    return (
        <div className="h-screen flex flex-col justify-between bg-white">
            <div>
                <div className="w-90 mt-10">
                    <Info />
                    <Input formik={formik} classInputTag="text-center" label="شماره سریال" name="code" />
                </div>
            </div>

            <div className="w-90 pb-6 flex gap-4 items-center">
                <Link href="/counter">
                    <Button
                        icon={<GoArrowRight />}
                        className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                        name="بازگشت"
                    />
                </Link>
                <Button onClick={formik.handleSubmit} name="استعلام" className="!bg-green-600  text-white" />
            </div>
        </div>
    );
};

export default SerialForm;
