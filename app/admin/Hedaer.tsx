import { Sidebar_icon } from '@/components/icons/icons'
import React from 'react'
import Logo from "@/assets/images/logo.svg"
import Image from 'next/image'

const Hedaer = () => {
  return (
    <div className='flex justify-between items-center border-b pb-5 border-[#e1e1e1]'>
      <div className='w-10 h-10 bg-[#f7f7f7] flex justify-center items-center rounded-lg'>
        <Sidebar_icon />
      </div>
      <svg width="35" height="35" viewBox="0 0 97 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5 92C75.2858 92 97 71.4051 97 46C97 20.5949 75.2858 0 48.5 0C21.7141 0 0 20.5949 0 46C0 71.4051 21.7141 92 48.5 92ZM63.6303 21.4287C64.3668 18.9475 61.8281 17.4803 59.5095 19.047L27.1433 40.916C24.6288 42.6151 25.0243 46 27.7374 46H36.2603V45.9374H52.8711L39.3364 50.4668L33.3697 70.5713C32.6333 73.0526 35.1717 74.5198 37.4905 72.953L69.8567 51.0841C72.3712 49.3851 71.9755 46 69.2626 46H56.3379L63.6303 21.4287Z" fill="#F67D14" />
      </svg>
    </div>
  )
}

export default Hedaer