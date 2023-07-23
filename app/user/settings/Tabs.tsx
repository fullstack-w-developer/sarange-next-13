"use client";
import Button from '@/components/common/Button'
import CardBank from '@/components/common/CardBank';
import React, { useState } from 'react'

const Tabs = () => {
    const [select, setSelect] = useState(0)
    const itemTabs = ["نمایش کارت های من", "انتقال وجه"]
    return (
        <div className='w-90'>
            <div className='flex  gap-2 mt-2 shadow items-center p-1  bg-[#f8f8f8]'>
                {
                    itemTabs.map((tab, index) => (
                        <Button name={tab} key={index} className={`${select === index ? "!bg-orange" : "!bg-transparent !text-[#222]"}`} />
                    ))
                }
            </div>
            {
                select === 0 &&
                <div className='flex flex-col gap-5 mt-10'>
                    <CardBank />
                    <CardBank />
                    <CardBank />
                </div>
            }
        </div>

    )
}

export default Tabs