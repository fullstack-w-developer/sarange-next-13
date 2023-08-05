"use client";
import Button from "@/components/common/Button";
import { Warr_iocn } from "@/components/icons/icons";
import { initialValuesCheckCode } from "@/helper/utils/initialValues";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import { validationSchemaCheckCode } from "@/helper/utils/validation/auth";
import useVerifyCodeMutation from "@/hooks/mutation/counter/useVerifyCodeMutation";
import useCounterStore from "@/stores/counter-store";
import { useFormik } from "formik";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import ReactInputVerificationCode from "react-input-verification-code";

const VerifyCode = () => {

    const { cardblocking, setStep } = useCounterStore();
    const { mutate, isError, error, isLoading } = useVerifyCodeMutation();
    const formik = useFormik({
        initialValues: initialValuesCheckCode,
        validationSchema: validationSchemaCheckCode,
        onSubmit: (values) => {
            console.log(cardblocking)
            mutate({ Code: Number(values.Code), Phone: toEnglishNumber(cardblocking?.phone!)! });
        },
    });

    const onChange = (val: string) => {
        formik.setFieldValue("Code", val);
    };
    return (
        <div className="w-90 min-h-screen flex-col flex justify-between ">
            <div className="mt-10">
                <ReactInputVerificationCode onChange={onChange} placeholder="" length={4} />
            </div>
            {isError && (
                <div className="flex flex-col -mt-5 gap-3 items-center justify-center">
                    <Warr_iocn />
                    {/* @ts-ignore */}
                    <p className="text-center text-orange font-artin-light">{error?.response?.data?.Message}</p>
                </div>
            )}
            <div className="flex items-center gap-6 mb-4">
                <Button
                    onClick={() => setStep(0)}
                    icon={<GoArrowRight />}
                    className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                    name="بازگشت"
                />
                <Button
                    isLoading={isLoading}
                    onClick={formik.handleSubmit}
                    name="مرحله بعد"
                    className="!bg-green-600  text-white"
                />
            </div>
        </div>
    );
};

export default VerifyCode;
