import Image from 'next/image'
import star from "../assets/images/static__svg__Skeleton.light.svg"

export default function Application() {
    return (
        <div className='mt-[60px]'>
            <div className='bg-[#F67D14] h-[2px] w-full'></div>
            <div className='w-full flex items-center justify-center '>
                <h2 className='bg-[#F67D14] text-white py-2 px-8 rounded-b-[25px] text-[17px] lg:text-[20px] font-es_bold'>اپلیکیشن سارنگ</h2>
            </div>
            <div className='bg-white rounded-[25px] py-5 w-[80%] lg:w-[60%] mx-auto mt-10 shadow-lg shadow-[#0000000d] overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-5 px-5 lg:p-0'>
                <Image src={star} alt='' className='lg:-mr-28 rounded-[25px]' />
                <p className='text-justify text-[#000000] max-w-[480px] lg:ml-5 text-[14px] lg:text-[16px] font-es_medium'>اپلیکیشن سارنگ یک برنامه بومی ... تا استفاده از دانش بومی جوانان ایرانی، برای سهولت در پرداخت ها بدون نیاز به پول فیزیکی، پرداخت های خود راانجام دهید که در کنار این سهوات با .. 100 درصد تراکنش ها و فعالیت های کاربران صورت گرفته است.</p>
            </div>
        </div>
    )
}
