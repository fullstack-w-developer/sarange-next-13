"use client"
import { Switch } from '@mui/material'
import React from 'react'
interface Props {
    card: {
        Status: boolean;
        Serial: string;
        CreatedAt: string;
        Blance: number;
    }
}

const CardBank = ({ card }: Props) => {
    return (
        <div className=' w-full h-[180px] flex flex-col justify-between bg_cards p-2 rounded-lg'>

            <div className='flex items-center justify-between'>
                <span className='font-artin-regular'>آیا میخواهید کارت را غیر فعال کنید؟</span>
                <Switch checked={card.Status} defaultChecked color='warning' />
            </div>
            <div className='flex items-center justify-between '>
                <p className='font-artin-bold text-[#626262] pl-2 '>موجودی کارت</p>

                <div className='flex items-center gap-1 justify-end'>
                    <p className='font-artin-bold text-2xl text-[#222]'>{card.Blance}</p>
                    <span className='font-artin-regular text-[#626262]'>تومان</span>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <p>تاریخ صدور</p>
                    <p>{card.CreatedAt}</p>
                    
                </div>
                <div className='flex items-center justify-between '>
                    <p className='font-artin-bold text-[#626262] pl-2'>شماره سریال</p>


                    <div className='flex items-center gap-1 justify-end'>
                        <p className='font-artin-bold text-2xl text-[#222]'>{card.Serial}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBank