import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='flex flex-col justify-between min-h-screen'>
            <Header />
            <div className="w-[90%] mx-auto my-10 flex-1">{children}</div>
            <Footer />
        </div>
    )
}

export default Layout
