import CardTransaction from '@/components/common/CardTransaction'
import { getTrasactions } from '@/server/user/actions'
import { Transaction } from '@/types/User'
import React from 'react'
import ProfileInfo from '@/components/common/ProfileInfo'
import Menu from '@/components/common/Menu'
import { menuUser } from '@/helper/utils/data'

const Transactions = async () => {
    const transactions: Transaction[] = await getTrasactions()
    return (
        <>
            <div className='w-90 flex flex-col gap-5 mt-10 pb-10'>
                {
                    transactions.map((transaction, index) => (
                        <CardTransaction transaction={transaction} key={index} />
                    ))
                }
            </div>
            <Menu menu={menuUser}/>
        </>
    )
}

export default Transactions