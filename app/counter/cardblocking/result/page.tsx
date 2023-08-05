import Button from '@/components/common/Button'
import Link from 'next/link'
import React from 'react'

const Result = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-90'>
            <Link className='w-full ' href="/counter">
            <Button name='صحفه اصلی'/>
            </Link>
        </div>
    )
}

export default Result