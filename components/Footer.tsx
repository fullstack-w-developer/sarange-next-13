import Image from 'next/image';
import { FiInstagram } from 'react-icons/fi';
import { PiTelegramLogo } from 'react-icons/pi';
import namd from "../assets/images/81.png"
import dgi from "../assets/images/samandehi.jpg"
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

                                <Link key={index} href={item.link} className='flex border-2 border-white rounded-[25px] text-white items-center justify-center py-2 px-5 w-[250px]'>
                                    {item.title}
                                </Link>

                            )
                        })}
                    </div>
                    <div className='w-full lg:w-[1px] h-[1px] lg:h-72 bg-[#ffffff4d]'></div>
                    <div className='bg-white flex rounded-[25px] items-center justify-center pl-5'>

                        <a className='w-32 h-[200px] flex justify-center items-center' target='_blank' href='https://trustseal.enamad.ir/u?id=389641&code=Wx3D0ZARrxXvhfKlDSmJcMJQcz3FAbuI'>
                            <Image alt='' src={namd}/>
                        </a>

                        {/* <a href="https://trustseal.enamad.ir/?id=115871&Code=s2cB6TWMXCw80xjimu6h">
                            <Image src={namd} alt='' />
                        </a> */}
                
                    </div>
                </div>
                <div className='mt-[30px]'>
                    <p className='flex items-center justify-center pt-5 text-white text-[12px] text-left font-es_medium'>© 2023 تمام حقوق مادی و معنوی ....</p>
                </div>
            </div>

        </div>
    )
}
