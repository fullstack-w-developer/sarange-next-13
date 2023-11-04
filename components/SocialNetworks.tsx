import { FiInstagram } from 'react-icons/fi';
import { PiTelegramLogo } from 'react-icons/pi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import bale from "../assets/images/بله.png"
import robi from "../assets/images/روبیکا.png"
import ita from "../assets/images/ایتا.png"
import Image from 'next/image';
export default function SocialNetworks() {
    return (
        <div className='space-y-5 font-es_medium'>
            <a href="https://instagram.com/taxisarang?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                اینستاگرام سارنگ
                <FiInstagram size={25} />
            </a>
            <a href="https://t.me/TaxiSarang" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                تلگرام سارنگ
                <PiTelegramLogo size={25} />
            </a>
            <a href="https://eitaa.com/TaxiSarang" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                ایتا سارنگ
                <Image src={ita} alt='' className='w-[30px]'/>
            </a>
            <a href="https://rubika.ir/taxisarang" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                روبیکا سارنگ
                <Image src={robi} alt='' className='w-[30px]'/>
            </a>
            <a href="https://twitter.com/taxisarang?s=09" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                توییتر سارنگ
                <AiOutlineTwitter size={25} />
            </a>
            <a href="www.linkedin.com/in/taxisarang" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                لینکدین سارنگ
                <FaLinkedinIn size={25} />
            </a>
            <a href="https://ble.ir/taxisarang" className='flex border-2 border-white rounded-[25px] font-artin-regular text-white items-center justify-between py-2 px-5 w-[250px]'>
                بله سارنگ
                <Image src={bale} alt='' className='w-[30px]'/>
            </a>
        </div>
    )
}
