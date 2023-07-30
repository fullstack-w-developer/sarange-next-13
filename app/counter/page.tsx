import Button from '@/components/common/Button'
import Menu from '@/components/common/Menu'
import { counterList } from '@/helper/utils/data'
import Link from 'next/link'
import React from 'react'

const Counter = () => {
  return (
    <div className='w-90 flex justify-center items-center min-h-screen'>
      <div className='w-full flex flex-col gap-4'>
        <Link href="/counter/scan">
          <Button name='شارژ کارت' />
        </Link>
        <Link href="/counter/scan">
          <Button name='صدور کارت' />
        </Link>
      </div>
      <Menu menu={counterList} />
    </div>
  )
}

export default Counter