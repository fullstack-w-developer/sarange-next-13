"use client"
import { Switch } from '@mui/material'
import React from 'react'

const CardBank = () => {
    return (
        <div className=' w-full  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-2 rounded-lg'>
            <div className='flex items-center justify-between'>
                <span className='font-artin-regular'>آیا میخواهید کارت را غیر فعال کنید؟</span>
                <Switch defaultChecked color='warning' />
            </div>
            <div className='flex items-center justify-between my-5'>
                <p className='font-artin-bold text-[#626262] pl-2 '>موجودی کارت</p>

                <div className='flex items-center gap-1 justify-end'>
                    <p className='font-artin-bold text-2xl text-white'>۲۲۲,۴۳۴,۵۶۶۶</p>
                    <span className='font-artin-regular text-[#626262]'>تومان</span>
                </div>
            </div>
            <div className='flex items-center justify-between my-5'>
                <p className='font-artin-bold text-[#626262] pl-2'>شماره سریال</p>

                <div className='flex items-center gap-1 justify-end'>
                    <p className='font-artin-bold text-2xl text-white'>۲۲۲ ۴۳۴ ۵۶۶</p>
                </div>
            </div>
        </div>
    )
}

export default CardBank