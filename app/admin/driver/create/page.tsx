"use client";
import Plaque from "@/components/admin/Plaque";
import CustomRadioButton from "@/components/common/CustomRadioButton";
import Input from "@/components/common/Input";
import Select from "@/components/common/Select";
import { sexPerson } from "@/helper/utils/data";
import { useFormik } from "formik";
import React from "react";

const Create = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {},
    });
    return (
        <div className="border mt-5 flex-1 border-gray-200 rounded-lg">
            <form className="grid grid-cols-3 w-[90%] mx-auto gap-2 gap-x-4 mt-4 container_create_taxi">
                <Input classInput="!h-[44px]" classInputTag="text-[12px]" formik={formik} label="نام" />
                <Input classInput="!h-[44px]" classInputTag="text-[12px]" formik={formik} label="خانوادگی" />
                <Input classInput="!h-[44px]" classInputTag="text-[12px]" formik={formik} label="کد شهری" />
                <Input classInput="!h-[44px]" classInputTag="text-[12px]" formik={formik} label="شماره حساب" />
                <Input classInput="!h-[44px]" classInputTag="text-[12px]" formik={formik} label="شبا" />
                <Input classInput="!h-[44px]" classInputTag="text-[12px]" formik={formik} label="نوع ماشین" />
                <Select label="مسیر" formik={formik} name="" options={[]} />
                <Plaque />
                <div></div>
                <CustomRadioButton className="mt-4" label="آیا تاکسی چرخشی است؟" name="type" formik={formik} list={sexPerson} />
                <CustomRadioButton className="mt-4" label="آیا کمک راننده دارد؟" name="type" formik={formik} list={sexPerson} />
                <CustomRadioButton className="mt-4" label="جنسیت" name="type" formik={formik} list={sexPerson} />
            </form>
        </div>
    );
};

export default Create;
