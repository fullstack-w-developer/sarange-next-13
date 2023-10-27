import Image from 'next/image'
import logo from "../assets/images/static__svg__logo.svg";
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { header } from '@/helper/utils/data';

export default function Header() {
    return (
        <div className='w-[90%] mx-auto flex items-center justify-between gap-16 my-5'>
            <div className='hidden lg:flex gap-10 items-center'>
                <Link href="/">
                    <Image src={logo} alt="" />
                </Link>
                <ul className='flex items-center gap-10 font-es_medium'>
                {header.map((item,index) =>{
                    return(
                        <li className='text-[#909090] text-[15px]' key={index}>
                        <Link href={item.link}>
                           {item.title}
                        </Link>
                    </li>
                    )
                })}
                </ul>
            </div>
            <div className='flex items-center gap-10'>
                <button className='block lg:hidden'>
                    <RxHamburgerMenu size={25} />
                </button>
                <button className='bg-[#F67D14] h-[36px] text-white rounded-[25px] w-[160px] font-es_medium text-[12px] lg:text-[16px]'>نسخه آنلاین اپلیکیشن</button>
            </div>

            <a href="/" className='block lg:hidden'>
                <Image src={logo} alt="" />
            </a>
        </div>
    )
}
