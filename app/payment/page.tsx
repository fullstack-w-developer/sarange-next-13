import React from 'react'
import Success from './Success'
import { redirect } from 'next/navigation'
import Faild from './Faild'
type Props = {
    searchParams: {
        SystemTraceNo: string,
        PaymentStatus: "ناموفق" | "موفق",
        RetrivalRefNo: string,
    }
}
const Page = ({ searchParams }: Props) => {
    if (!searchParams.RetrivalRefNo || searchParams.RetrivalRefNo === null) return redirect("/usrr/profile")
    if (!searchParams.SystemTraceNo || searchParams.SystemTraceNo === null) return redirect("/user/profile")
    return (
        <div>
            {
                searchParams.PaymentStatus === "موفق" ? <Success searchParams={searchParams} /> : <Faild searchParams={searchParams}/>
            }
        </div>
    )
}

export default Page