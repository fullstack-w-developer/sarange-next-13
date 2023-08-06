import Header from '@/components/admin/Header'
import Sidebar from '@/components/admin/Sidebar'
import React from 'react'
interface Props {
    children: React.ReactNode
}
const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <div className="flex  w-90 mt-6 gap-10">
                <Sidebar />
                {children}
            </div>

        </div>
    )
}

export default Layout