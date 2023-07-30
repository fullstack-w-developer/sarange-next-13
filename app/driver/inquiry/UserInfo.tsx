"use client";
import { useState } from "react"
import BackHeader from '@/components/common/BackHeader'
import Button from '@/components/common/Button'
import CostTaxiInsetMoney from '@/components/common/CostTaxiInsetMoney'
import Counter from '@/components/common/Counter'
import { initialValuesFare } from '@/helper/utils/initialValues';
import { variantSchemaFare } from '@/helper/utils/validation/fare';
import useFarePaymentMutation from '@/hooks/mutation/Fare/useFarePaymentMutation';
import { Driver } from '@/types/Driver'
import { useFormik } from 'formik';
import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import InfoDriver from './InfoDriver';
import { toEnglishNumber } from '@/helper/utils/toFarsiNumber';
import VerifyPay from './VerifyPay';
interface Props {
    userInfo: Driver,
    paymentType?: string,
    cardId?: string,

}
const UserInfo = ({ userInfo, paymentType, cardId }: Props) => {
    const [open, setOpen] = useState(false)
    const { isLoading, mutate } = useFarePaymentMutation({ url: "/driver/result" })
    const formik = useFormik({
        initialValues: initialValuesFare,
        validationSchema: open && variantSchemaFare,
        onSubmit: (values) => {
            const data = {
                customer: userInfo.user.AuthId!,
                paymentType: paymentType,
                ...(cardId ? { cardId } : null),
                ...(values.password ? { password: toEnglishNumber(values.password) } : null),
                ...(values.amount
                    ? { amount: Number(toEnglishNumber(values.amount)) }
                    : { numberOfPassenger: Number(values.numberOfPassenger) }),
            };

            if(values.password){
                return mutate(data)
            }
            if (Number(values.numberOfPassenger) >= 2 || Number(toEnglishNumber(formik.values.amount)) > 5000) {
                return setOpen(!open)
            }

            mutate(data);
        }
    })
    return (
        <>
            <div className="min-h-screen w-90 bg-white flex flex-col justify-between gap-20">
                <div>
                    <BackHeader url='/driver/username' name='مشخصات کاربر' />

                    <div className="">
                        <InfoDriver driver={userInfo} />
                        {/* type car */}
                        {userInfo?.CarRoute.Name === "گردشی" ? (
                            <CostTaxiInsetMoney formik={formik} />
                        ) : (
                            <Counter formik={formik} driver={userInfo} />
                        )}
                    </div>
                </div>
                <div className=" pb-6 flex gap-4 items-center">
                    <Link href="/user/username">
                        <Button
                            icon={<GoArrowRight />}
                            className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                            name="بازگشت"

                        />
                    </Link>
                    <Button onClick={formik.handleSubmit} isLoading={isLoading} name="پرداخت" className="!bg-green-600  text-white" />
                </div>
            </div>
            <VerifyPay isLoading={isLoading} setOpen={setOpen} open={open} formik={formik} />
        </>
    )
}

export default UserInfo