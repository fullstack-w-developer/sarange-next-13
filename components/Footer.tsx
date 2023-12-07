"use client"
import SocialNetworks from './SocialNetworks';
import Link from 'next/link';
import { header } from '@/helper/utils/data';
const Footer = () => {
    return (
        <div className='bg-[#FAA530] pt-14 pb-5 mt-[130px] bottom-0'>
            <div className='w-[95%] lg:w-[90%] mx-auto space-y-5'>
                <div className='flex flex-col lg:flex-row gap-7 items-center justify-between h-fit'>
                    <SocialNetworks />
                    <div className='w-full lg:w-[1px] h-[1px] lg:h-72 bg-[#ffffff4d]'></div>
                    <div className='flex-col items-center justify-center gap-5 flex font-es_medium'>
                        {header.map((item, index) => {
                            return (

                                <Link key={index} href={item.link} className='flex border-2 border-white rounded-[25px] font-estedad-medium text-white items-center justify-center py-2 px-5 w-[250px]'>
                                    {item.title}
                                </Link>

                            )
                        })}
                    </div>
                    <div className='w-full lg:w-[1px] h-[1px] lg:h-72 bg-[#ffffff4d]'></div>
                    <div className=' flex rounded-[25px] items-center justify-center gap-10'>
                        {/* @ts-ignore */}
                        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=431633&Code=5zMxSGsoa7VZduYETMnJO8d3lWaUiK6z'>
                            {/* @ts-ignore */}
                            <img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=431633&Code=5zMxSGsoa7VZduYETMnJO8d3lWaUiK6z' alt='' Code='5zMxSGsoa7VZduYETMnJO8d3lWaUiK6z' />
                        </a>
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <p className='flex items-center justify-center pt-5 text-white text-[12px] text-left font-estedad-medium'>© 2023 تمام حقوق مادی و معنوی مربوط به تیم  سارنگ می باشد</p>
                </div>
            </div>

        </div>
    )
}


export default Footer