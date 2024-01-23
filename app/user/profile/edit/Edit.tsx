"use client";
import CustomRadioButton from "@/components/common/CustomRadioButton";
import BackHeader from "@/components/common/BackHeader";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { sexPerson } from "@/helper/utils/data";
import useEditUserMutation from "@/hooks/mutation/auth/useEditUserMutation";
import { useFormik } from "formik";
import React from "react";
import { motion } from "framer-motion";
import { animationsScreens, variants } from "@/theme/animations";
import { User } from "@/types/User";
type Props = {
    user: User
}
const Edit = ({ user }: Props) => {
    const { mutate, isLoading } = useEditUserMutation();
    const formik = useFormik<any>({
        initialValues: {
            FirstName:user.FirstName,
            LastName:user.LastName,
            Sex:user.Sex
        },
        onSubmit: (values) => {
            const data = {
                updatedField: {
                    Sex: values.Sex,
                    FirstName: values.FirstName,
                    LastName: values.LastName,
                },
            };
            mutate(data);
        },
    });


    return (
        <motion.div {...animationsScreens}>
            <motion.div variants={variants} className="px-6 flex flex-col justify-between min-h-screen bg-white">
                <div>
                    <BackHeader url="/user/profile" name="ویرایش پروفایل" />
                    <form className="mt-7 flex flex-col gap-3">
                        <Input label="نام" formik={formik} name="FirstName" />
                        <Input label="نام‌خانوادگی" formik={formik} name="LastName" />
                        <CustomRadioButton formik={formik} name="Sex" list={sexPerson} />
                    </form>
                </div>
                <Button
                    isLoading={isLoading}
                    onClick={formik.handleSubmit}
                    name="ویرایش"
                    className="!bg-[#464646] !text-white !mb-4"
                />
            </motion.div>
        </motion.div>
    );
};

export default Edit;
