"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { initialValuesMoneyTransfoerVerify } from "@/helper/utils/initialValues";
import { useFormik } from "formik";
import React from "react";
import CardInfo from "./CardInfo";
import useUserStore from "@/stores/user-store";
import useCardsTransferMoneyMutation from "@/hooks/mutation/user/useCardsTransferMoneyMutation";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import BackHeader from "@/components/common/BackHeader";
import { motion } from "framer-motion";
import { animationsScreens, variants } from "@/theme/animations";
interface Props {
    details: {
        FirstName: string;
        LastName: string;
        Serial: string;
        AuthId: string;
    };
}
const Form = ({ details }: Props) => {
    const { mutate, isLoading } = useCardsTransferMoneyMutation();
    const { moneytransfer } = useUserStore();
    const formik = useFormik({
        initialValues: initialValuesMoneyTransfoerVerify,
        onSubmit: (values) => {
            const data = {
                to: details.AuthId,
                Amount: moneytransfer?.Amount,
                password: toEnglishNumber(values.password),
            };

            mutate(data);
        },
    });
    return (
        <motion.div {...animationsScreens}>
            <motion.div variants={variants} className="w-90 flex flex-col justify-between min-h-screen">
                <div className="flex flex-col ">
                    <BackHeader url="/user/moneytransfer/1" name="انتقال وجه" />
                    <CardInfo details={details} />

                    <div className="flex flex-col gap-3 mt-14">
                        <p className="font-artin-bold text-xl text-[#222]">
                            برای تائید انتقال وجه لطفا رمز عبور خود را وارد کنید
                        </p>
                        <Input type="password" ltr label="رمز عبور" name="password" formik={formik} />
                    </div>
                </div>

                <Button isLoading={isLoading} onClick={formik.handleSubmit} className="!mb-4 !bg-orange" name="انتقال" />
            </motion.div>
        </motion.div>
    );
};

export default Form;
