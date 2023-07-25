import { Button } from '@mui/material'
import React from 'react'
import Error500 from "@/assets/images/500.png"
import Image from 'next/image'
const Error = () => {
    return (
        <div className="flex justify-center w-90 items-center min-h-screen">
            <div>
                <Image width={300} src={Error500} alt="" />
                <p className="font-artin-bold mt-5 text-xl text-center w-full">در حال حاضر سرور ها قطع می باشید ، از شکیبایی شما متشکریم .</p>

                <Button
                    className="!bg-orange !mt-16"
                    name="تلاش دوباره"

                />

            </div>
        </div>
    )
}

export default Error