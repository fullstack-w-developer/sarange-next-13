import Image from "next/image"
import star from "../assets/images/logo.jpg"

export default function Application() {
    return (
        <div className='mt-[60px]'>
            <div className='bg-[#F67D14] h-[2px] w-full'></div>
            <div className='w-full flex items-center justify-center '>
                <h2 className='bg-[#F67D14] text-white py-2 px-8 rounded-b-[25px] text-[17px] lg:text-[20px] font-estedad-exbold'>اپلیکیشن سارنگ</h2>
            </div>
            <div className='bg-white rounded-[25px] py-5 w-[80%] lg:w-[60%] mx-auto mt-10 shadow-lg shadow-[#0000000d] overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-5 px-6 lg:p-6'>
                <Image width={200} height={200} src={star} alt='' className='lg:-mr-28  bg-white' />
                <p className='text-justify text-[#000000] max-w-[480px] lg:ml-5 text-[14px] lg:text-[16px] font-estedad-medium'>
                    اپلیکیشن سارنگ یک برنامه بومی که با استفاده از دانش بومی جوانان ایرانی ، برای سهولت در پرداخت ها بدون نیاز به پول فیزیکی ، پرداخت های خود را انجام دهید که در کنار این سهولت با امنیت ۱۰۰ درصد تراکنش ها و فعالیت های کاربران صورت گرفته است.

                </p>
            </div>
        </div>
    )
}
