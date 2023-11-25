import Image from 'next/image';
import namd from "../assets/images/81.png"
import Asnaf from "../assets/images/asnaf.png"
import SocialNetworks from './SocialNetworks';
import Link from 'next/link';
import { header } from '@/helper/utils/data';
export default function Footer() {
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
                        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=389641&Code=Wx3D0ZARrxXvhfKlDSmJcMJQcz3FAbuI'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=389641&Code=Wx3D0ZARrxXvhfKlDSmJcMJQcz3FAbuI' alt='' Code='Wx3D0ZARrxXvhfKlDSmJcMJQcz3FAbuI'/></a>

                        <a target="_blank" className='w-32 h-[200px] bg-white rounded-lg flex justify-center items-center' href="https://azgharbi.irannsr.org/fa/trade_unit/2503633/swd_id/107816/%D8%A7%D8%B9%D8%B6%D8%A7%DB%8C-%D8%AD%D9%82%D9%88%D9%82%DB%8C-%D8%A8%D9%87%D8%A7%D8%B1%D8%A7%D9%86-%D9%87%D8%AF%D8%A7%DB%8C%D8%AA-%D8%A7%D8%B1%D8%AA%D8%A8%D8%A7%D8%B7-%D8%B1%D8%B3%D8%A7.html">
                            <Image src={Asnaf} alt='' />
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
