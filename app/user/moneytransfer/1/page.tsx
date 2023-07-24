"use client";
import Image from 'next/image'
import React from 'react'
import ImageTransform from "@/assets/images/transform.jpeg"
import Input from '@/components/common/Input'
import { useFormik } from 'formik'
import { initialValuesMoneyTransfoer } from '@/helper/utils/initialValues'
import Button from '@/components/common/Button';
import { validationSchemaMoneyTransfoerStep1 } from '@/helper/utils/validation/moneytransform';
import { useRouter } from 'next/navigation';
import useUserStore from '@/stores/user-store';
import { toEnglishNumber } from '@/helper/utils/toFarsiNumber';
const Step1 = () => {
    const {setMoneytransfer} = useUserStore()
    const router = useRouter()
    const formik = useFormik({
        initialValues: initialValuesMoneyTransfoer,
        validationSchema: validationSchemaMoneyTransfoerStep1,
        onSubmit: (values) => {
            setMoneytransfer({Amount:Number(toEnglishNumber(values.Amount))})
            router.push(`/user/moneytransfer/2?id=${toEnglishNumber(values.serial)}`)
        }
    })
    return (
        <div className='w-90 h-screen flex flex-col justify-between'>


            <div>
                <div>
                    <h1 className='font-artin-black text-[#222] text-center w-full mt-10 text-2xl'>انتقال کارت به کارت</h1>
                    <Image src={ImageTransform} alt="" />
                </div>

                <div className='flex flex-col gap-2'>
                    <Input ltr label='شماره سریال کارت مقصد' name='serial' formik={formik} />
                    <Input ltr label='مبلغ موردنظر (تومان)' name='Amount' formik={formik} />
                </div>
            </div>



            <Button onClick={formik.handleSubmit} className='!mb-5 !bg-orange' name='مرحله بعد' />
        </div>
    )
}

export default Step1