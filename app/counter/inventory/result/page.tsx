import Button from '@/components/common/Button'
import { getBalanceByCounter } from '@/server/counter/action'
import Link from 'next/link'
import React from 'react'
interface Props {
    searchParams: { id: string }
}
const Result = async ({ searchParams }: Props) => {
    const balance: { Balance: number } = await getBalanceByCounter(searchParams.id)
    return (
        <div className='min-h-screen flex flex-col justify-between w-90'>
            <div className='flex flex-col gap-4 mt-10 justify-center items-center'>
                <p className='font-artin-bold text-xl'>موجودی کارت</p>
                <h1 className='text-center font-artin-black text-orange'>{balance.Balance} تومان</h1>

            </div>

            <Link className='mb-4' href="/counter">
            <Button name='رفتن به صحفه  اصلی'/>
            </Link>
        </div>
    )
}

export default Result