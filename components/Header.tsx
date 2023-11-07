import Image from 'next/image'
import Logo from "../assets/images/logo.png";
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { header } from '@/helper/utils/data';

export default function Header() {
    return (
        <div className='w-[90%] mx-auto flex items-center justify-between gap-16 my-5'>
            <div className='hidden lg:flex gap-10 items-center'>
                <Link href="/">
                    <Image width={60} height={60} src={Logo} alt="" />
                </Link>
                <ul className='flex items-center gap-10 font-es_medium'>
                    {header.map((item, index) => {
                        return (
                            <li className='text-[#909090] text-[15px]' key={index}>
                                <Link className='font-estedad-medium' href={item.link}>
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
                <Link href={"/wellcome"} className='bg-[#F67D14]  text-white rounded-[25px] w-fit px-4 py-3 font-estedad-medium text-[12px] lg:text-[14px]'>نسخه آنلاین اپلیکیشن</Link>
            </div>

            <Link href="/" className='block lg:hidden'>
                <Image src={Logo} alt="" />
            </Link>
        </div>
    )
}
