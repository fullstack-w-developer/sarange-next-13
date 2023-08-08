"use client";
import Button from "@/components/common/Button";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import Input from "@/components/common/Input";
import { variantSchemaGetCode } from "@/helper/utils/validation/counter";
import { Warr_iocn } from "@/components/icons/icons";
import useGetActivationCode from "@/hooks/mutation/counter/useGetActivationCode";
import useCounterStore from "@/stores/counter-store";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";

const GetCode = () => {
    const { setCardblocking, cardblocking } = useCounterStore();
    const { isLoading, mutate, isError, error } = useGetActivationCode();
    const formik = useFormik({
        initialValues: cardblocking,
        validationSchema: variantSchemaGetCode,
        onSubmit: (values) => {
            const phone = { phone: toEnglishNumber(values.phone) };
            setCardblocking(phone);
            mutate(phone);
        },
    });
    return (
        <>
            <div className="min-h-screen w-90 bg-white flex flex-col justify-between gap-20">
                <div>
                    <div className="mt-10">
                        <Input
                            ltr
                            label="شماره تلفن کاربر"
                            placeholder="لطفا شماره تلفن همراه را با عدد صفر وارد کند"
                            classInput=""
                            formik={formik}
                            name="phone"
                        />
                    </div>
                </div>

                {isError && (
                    <div className="flex flex-col -mt-5 gap-3 items-center justify-center">
                        <Warr_iocn />
                        {/* @ts-ignore */}
                        <p className="text-center text-orange font-artin-light">{error?.response?.data?.Message}</p>
                    </div>
                )}
                <div className=" pb-6 flex gap-4 items-center">
                    <Link href="/counter">
                        <Button
                            icon={<GoArrowRight />}
                            className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                            name="بازگشت"
                        />
                    </Link>
                    <Button
                        onClick={formik.handleSubmit}
                        isLoading={isLoading}
                        name="مرحله بعدی"
                        className="!bg-green-600  text-white"
                    />
                </div>
            </div>
        </>
    );
};

export default GetCode;
