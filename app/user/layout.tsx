import GlobalLayout from '@/components/common/GlobalLayout';
import ProfileInfo from '@/components/common/ProfileInfo'
import { getUser } from '@/server/user/actions';
import { headers } from 'next/headers';
import React from 'react'
interface Props {
    children: React.ReactNode
}
const Layout = async ({ children }: Props) => {

    const user = await getUser();



    return (
        <GlobalLayout user={user}>
            {children}
        </GlobalLayout>
    )
}

export default Layout