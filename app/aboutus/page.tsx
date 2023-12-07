import Layout from '@/components/Layout'
import React from 'react'

const Page = () => {
    return (
        <Layout>
            <div className='text-[#000000] font-extrabold space-y-5 mt-5'>
                <h1 className='lg:text-[20px] text-[17px] mb-10 font-estedad-exbold'>درباره ما</h1>
                <p className='text-justify text-neutral-500 font-estedad-medium text-[13px] lg:text-[15px]'>
                    اپلیکیشن سارنگ توسط شرکت بهار(بهاران هدایت ارتباط رسا)توسعه داده شده و پشتیبانی می شود ، کلیه حقوق برای این شرکت محفوظ می باشد
                </p>
                <p className='text-justify text-neutral-500 font-artin-light text-[13px] lg:text-[15px]'>
                    تماس با ما :  دفتر مرکزی و پشتیبانی مشتریان ، آذربایجان غربی .خوی . جنب ساختمان شورای اسلامی
                    تلفن :۰۴۴۳۶۲۵۰۱۰۰ _۰۴۴۳۶۲۶۶۴۶۴
                </p>
            </div>
        </Layout>
    )
}

export default Page