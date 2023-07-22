"use client";
import Image from 'next/image'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import Logo from "@/assets/images/logo.svg"
import Link from 'next/link';

export const HeaderTransactions = () => {
    return (
        <div className='bg_header sticky top-0 h-[90px] rounded-b-[28px] flex justify-between px-4 items-center'>
            <Link href="/user/profile">
                <GoArrowRight size={33} className=' text-white' />
            </Link>
            <Image width={40} height={40} src={Logo} alt="" />
        </div>
    )
}
