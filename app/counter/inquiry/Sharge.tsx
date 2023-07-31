"use client";
import BackHeader from "@/components/common/BackHeader";
import Button from "@/components/common/Button";
import { initialValuesSharge } from "@/helper/utils/initialValues";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import Input from "@/components/common/Input";
import useShargeCardMutation from "@/hooks/mutation/counter/useShargeCardMutation";
import { variantSchemaShargeAmount } from "@/helper/utils/validation/counter";
import { Warr_iocn } from "@/components/icons/icons";
interface Props {
    cardId?: string;
}
const Sharge = ({ cardId }: Props) => {
    const { isLoading, mutate, isError, error } = useShargeCardMutation();
    const formik = useFormik({
        initialValues: initialValuesSharge,
        validationSchema: variantSchemaShargeAmount,
        onSubmit: (values) => {
            const data = {
                cardId,
                Amount: Number(toEnglishNumber(values.amount)),
            };

            mutate(data);
        },
    });
    return (
        <>
            <div className="min-h-screen w-90 bg-white flex flex-col justify-between gap-20">
                <div>
                    <div>
                        <BackHeader url="/counter" name="مبلغ شارژ" />
                    </div>
                    <div className="mt-10">
                        <Input
                            ltr
                            label="مبلغ شارژ (تومان)"
                            placeholder=" مبلغ شارژ را به تومان وارد کنید"
                            classInput=""
                            formik={formik}
                            name="amount"
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
                    <Link href="/user/username">
                        <Button
                            icon={<GoArrowRight />}
                            className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                            name="بازگشت"
                        />
                    </Link>
                    <Button
                        onClick={formik.handleSubmit}
                        isLoading={isLoading}
                        name="پرداخت"
                        className="!bg-green-600  text-white"
                    />
                </div>
            </div>
        </>
    );
};

export default Sharge;
