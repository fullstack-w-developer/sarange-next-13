"use client";
import BackHeader from '@/components/common/BackHeader'
import { animationsScreens, variants } from '@/theme/animations'
import React from 'react'
import { motion } from "framer-motion"
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'
import { useFormik } from 'formik'
import { validationSchemaAmount } from '@/helper/utils/validation/auth';
import useSharjeUserAccount from '@/hooks/query/auth/useSharjeUserAccount';
// @ts-ignore
import PN from "persian-number";
import Link from 'next/link';

const Sharje = () => {
    const formik = useFormik({
        initialValues: {
            amount: ""
        },
        validationSchema: validationSchemaAmount,
        onSubmit: async (values) => {
            refetch()
        }
    })
    const { refetch, isLoading } = useSharjeUserAccount(Number(formik.values.amount) * 10)
    return (
        <motion.div {...animationsScreens}>
            <motion.div variants={variants} className="w-90 h-screen flex flex-col justify-between">
                <div>
                    <BackHeader url="/user/profile" name="شارژ حساب" />

                    <div className="flex flex-col gap-2 mt-10">
                        <Input type='tel' ltr label="مقدار شارژ حساب (تومان)" name="amount" formik={formik} />
                        {
                            formik.values.amount &&
                            <span className='text-xs font-artin-regular'>{PN.convert(formik.values.amount)} تومان</span>
                        }
                    </div>
                </div>
                <div className='flex items-center gap-2 !mb-5'>
                    <Link className=' w-full h-full rounded-lg flex justify-center items-center text-center border border-neutral-200 !flex-1 text-[14px] font-estedad-medium' href={"/profile"}>انصراف</Link>
                    <Button isLoading={isLoading} onClick={formik.handleSubmit} className=" !bg-orange flex-1" name="تائید" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Sharje