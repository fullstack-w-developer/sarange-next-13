import React from 'react'
import Img from "@/assets/images/result.svg"
import Image from 'next/image'
import Link from 'next/link'
import { toFarsiNumber } from '@/helper/utils/toFarsiNumber'
type Props = {
    searchParams: {
        SystemTraceNo: string,
        PaymentStatus: "ناموفق" | "موفق",
        RetrivalRefNo: string,
    }
}
const Faild = ({searchParams}:Props) => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className=''>
                <Image className='mb-10 mx-auto' src={Img} alt='' />
                <div className='flex flex-col gap-2'>
                    <h1 className='text-start font-estedad-bold text-red-500'>متاسفانه شارژ حساب شما با موفقیت انجام نشد</h1>
                    <p className='font-estedad-medium mt-5 text-xs'>شماره مرجع تراکنش : <span className='font-bold'>{toFarsiNumber(searchParams.RetrivalRefNo)}</span></p>
                    <p className='font-estedad-medium mt-3 text-xs'>شماره  پیگیری : <span className='font-bold'>{toFarsiNumber(searchParams.SystemTraceNo)}</span></p>
                </div>
                <Link className='mt-10 border font-estedad-medium w-full block text-center py-3 border-orange text-orange rounded-lg text-xs' href={"/user"}>بارگشت به صحفه اصلی</Link>
            </div>

        </div>
    )
}

export default Faild