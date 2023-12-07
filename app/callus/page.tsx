import React from 'react'
import Layout from '@/components/Layout'

 const Callus=()=> {
    return (
        // <Layout>
            <div className='text-[#000000] font-extrabold space-y-5 mt-5'>
                <h1 className='text-[17px] lg:text-[20px] mb-10 font-es_bold'>تماس با ما</h1>
                <div className='space-y-5 font-es_medium text-[13px] lg:text-[16px]'>
                    <p className='text-justify'>
                        دفتر مرکزی و پشتیبانی مشتریان: آذربایجان غربی، خوی، ساختمان شورای اسلامی
                    </p>
                    <p className='flex items-center gap-5'>
                        تلفن:
                        <p className='flex flex-col'>
                            <span>56245245......</span>
                            <span>56245245......</span>
                        </p>
                    </p>
                </div>
            </div>
        // </Layout>
    )
}

export default Callus
