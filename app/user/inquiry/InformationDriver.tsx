"use client";
import InfoDriverProfile from "./DriverInfoProfile";
import PlaqueTaxi from "./PlaqueTaxi";
import { Driver } from "@/types/Driver";
import Button from "@/components/common/Button";
import { GoArrowRight } from "react-icons/go";
import { useFormik } from "formik";
import { initialValuesFare } from "@/helper/utils/initialValues";
import { toEnglishNumber } from "@/helper/utils/toFarsiNumber";
import { motion } from "framer-motion";
import { animationsScreens } from "@/theme/animations";
import Link from "next/link";
import Counter from "@/components/common/Counter";
import CostTaxiInsetMoney from "@/components/common/CostTaxiInsetMoney";
import { fares_action } from "@/server/user/actions";
import { errorToast } from "@/helper/utils/error";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface Props {
    driver: Driver;
    paymentType: string | any;
}
const InformationDriver = ({ driver, paymentType }: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const formik = useFormik({
        initialValues: initialValuesFare,
        onSubmit: async (values) => {
            const data = {
                car: driver?.Car._id!,
                paymentType: paymentType,
                ...(values.amount
                    ? { amount: Number(toEnglishNumber(values.amount)) }
                    : { numberOfPassenger: Number(values.numberOfPassenger) }),
            };

            setIsLoading(true)
            const response = await fares_action(driver.AuthId, data)
            console.log(response,"fjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
            if (response?.status) {
                router.push(`/user/result?id=${driver.AuthId}`)
            } else {
                errorToast(response?.data?.Message)
            }
            setIsLoading(false)
        },
    });

    return (
        <motion.div {...animationsScreens} className="min-h-screen w-90 bg-white flex flex-col justify-between gap-20">
            <div>
                <h1 className="text-center font-artin-black text-2xl border-b border-[#3f7f7f7] pb-4 mt-5">
                    مشخصات راننده و پرداخت
                </h1>

                <InfoDriverProfile driver={driver} />
                {/* type car */}
                <PlaqueTaxi driver={driver} />
                {driver?.CarRoute.Name === "گردشی" ? (
                    <CostTaxiInsetMoney formik={formik} />
                ) : (
                    <Counter formik={formik} driver={driver} />
                )}
            </div>
            <div className=" pb-6 flex gap-4 items-center">
                <Link href="/user">
                    <Button
                        icon={<GoArrowRight />}
                        className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                        name="بازگشت"
                    />
                </Link>
                <Button onClick={formik.handleSubmit} isLoading={isLoading} name="پرداخت" className="!bg-green-600  text-white" />
            </div>
        </motion.div>
    );
};

export default InformationDriver;
