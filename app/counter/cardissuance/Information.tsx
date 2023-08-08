"use client";
import CustomRadioButton from "@/app/auth/signup/information/CustomRadioButton";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { convertObjectEnglishNumber } from "@/helper/utils/converObject";
import { sexPerson } from "@/helper/utils/data";
import {
    validationSchemaInformationCardissuance,
    validationSchemaInformationCardissuancePass,
} from "@/helper/utils/validation/counter";
import useAssignCardToExitUser from "@/hooks/mutation/counter/useAssignCardToExitUser";
import useAssignCardToNewUser from "@/hooks/mutation/counter/useAssignCardToNewUser";
import useCounterStore from "@/stores/counter-store";
import { useFormik } from "formik";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const Information = () => {
    const { mutate, isError, isLoading, error } = useAssignCardToNewUser();
    const { mutate: mutateExit, isError: isErrorExit, isLoading: isLoadingExit, error: errorExit } = useAssignCardToExitUser();
    const { information } = useCounterStore();
    const formik = useFormik({
        initialValues: information,
        validationSchema: information.IsNewUser
            ? validationSchemaInformationCardissuance
            : validationSchemaInformationCardissuancePass,
        onSubmit: (values) => {
            const data = {
                cardId: "64c7a77fe63b7e4693bd0077",
                cardPassword: values.cardPassword,
                firstName: values.firstName,
                lastName: values.lastName,
                phone: information.phone,
                sex: values.sex,
            };
            const result = convertObjectEnglishNumber(data);
            if (information.IsNewUser) {
                mutate(result);
            } else {
                mutateExit(result);
            }
        },
    });
    return (
        <div className="w-90 flex flex-col justify-between min-h-screen">
            <div className="mt-12  flex flex-col gap-3 form_signup">
                {information.IsNewUser && (
                    <>
                        <Input name="firstName" label="نام" formik={formik} />
                        <Input name="lastName" label="خانوادگی" formik={formik} />
                    </>
                )}
                <Input name="cardPassword" label="رمز کارت" formik={formik} />
                <Input name="repCardPassword" label="تکرار رمز کارت" formik={formik} />
                {information.IsNewUser && <CustomRadioButton list={sexPerson} formik={formik} name="sex" />}
            </div>

            <div className=" pb-6 flex gap-4 items-center">
                <Button
                    icon={<GoArrowRight />}
                    className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                    name="بازگشت"
                />
                <Button
                    isLoading={isLoading || isLoadingExit}
                    onClick={formik.handleSubmit}
                    name="تکمیل"
                    className="!bg-green-600  text-white"
                />
            </div>
        </div>
    );
};

export default Information;
