import { getInquiry } from '@/server/user/actions';
import { Driver } from '@/types/Driver';
import React from 'react'
import CostTaxiInsetMoney from './CostTaxiInsetMoney';
import Counter from './Counter';
import InfoDriverProfile from './DriverInfoProfile';
import PlaqueTaxi from './PlaqueTaxi';
import Button from '@/components/common/Button';
import { GoArrowRight } from "react-icons/go"
interface Props {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}
const Inquiry = async ({ params, searchParams }: Props) => {
    const driver: Driver = await getInquiry(Number(searchParams?.code!))
    return (
        <div className="min-h-screen w-90 bg-white flex flex-col justify-between gap-20">
            <div>
                <div>
                    <h1 className="text-center font-artin-black text-2xl border-b border-[#3f7f7f7] pb-4 mt-5">
                        مشخصات راننده و پرداخت
                    </h1>
                </div>
                <div className="">
                    <InfoDriverProfile driver={driver} />
                    {/* type car */}
                    <PlaqueTaxi driver={driver} />
                    {driver?.CarRoute.Name === "گردشی" ? (
                        <CostTaxiInsetMoney />
                    ) : (
                        <Counter driver={driver} />
                    )}
                </div>
            </div>
            <div className=" pb-6 flex gap-4 items-center">
                <Button icon={<GoArrowRight />} className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1" name="بازگشت" />
                <Button name="پرداخت" className="!bg-green-600  text-white" />
            </div>
        </div>
    )
}

export default Inquiry