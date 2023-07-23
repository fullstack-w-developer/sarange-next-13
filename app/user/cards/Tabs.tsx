"use client";
import Button from '@/components/common/Button'
import CardBank from '@/components/common/CardBank';
import React, { useState } from 'react'
interface Props {
    cards: {
        Status: boolean;
        Serial: string;
        CreatedAt: string;
        Blance: number;

    }[]
}
const Tabs = ({ cards }: Props) => {
    const [select, setSelect] = useState(0)
    const itemTabs = ["کارت های فعال", "کارت های غیر‌فعال"]
    return (
        <div className='w-90 mt-8 pb-10'>
            <div className='flex  gap-2 mt-2  shadow items-center p-1  bg-[#f8f8f8]'>
                {
                    itemTabs.map((tab, index) => (
                        <Button name={tab} key={index} className={`z-10 ${select === index ? "!bg-orange" : "!bg-transparent !text-[#222]"}`} />
                    ))
                }
            </div>
            {
                select === 0 &&
                <div className='flex flex-col gap-5 mt-10'>
                    {
                        cards.map((card, index) => (

                            <CardBank card={card} key={index}/>
                        ))
                    }

                </div>
            }
        </div>

    )
}

export default Tabs