import Image from "next/image"
import star from "../assets/images/logo.jpg"
import { sell_products } from "@/helper/utils/data"
import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function Application() {
    return (
        <div className='mt-[60px] bg-neutral-100 rounded-l p-2'>
            <h1 className="font-estedad-bold mt-3 text-center">هزینه طراحی سایت در سارنگ چقدر است؟</h1>
            <div className="flex flex-wrap mt-10 gap-10 px-4">
                {sell_products.map((product, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-2 min-w-[230px]">
                        <div className="flex flex-col items-center">
                            <span className="font-estedad-medium text-xs text-zinc-400">قیمت طراحی سایت</span>
                            <p className="font-artin-bold">{product.title}</p>
                        </div>
                        <div className="flex  items-center gap-2  justify-center mt-3">
                            <p className="font-artin-bold text-xl">{product.price}</p>
                            <div className="flex flex-col gap-0">
                                <span className="text-xs font-artin-regular ">هزار تومان</span>
                                <span className="text-xs font-artin-regular text-amber-500">سالانه</span>
                            </div>
                        </div>

                        <ul>
                            {product.options.map((option, idx) => (
                                <div key={idx} className="flex items-center gap-1">
                                    <IoCheckmarkDoneOutline className="text-amber-500" />
                                    <li className="text-xs font-artin-regular" >{option}</li>
                                </div>
                            ))}
                        </ul>

                        <button className="w-full bg-amber-500 text-white mt-4 transition-all font-artin-regular rounded-lg py-1 hover:bg-amber-600">خرید</button>
                    </div>
                ))}
            </div>
            {/* <div className='bg-[#F67D14] h-[2px] w-full'></div> */}
            {/* <div className='w-full flex items-center justify-center '>
                <h2 className='bg-[#F67D14] text-white py-2 px-8 rounded-b-[25px] text-[17px] lg:text-[20px] font-estedad-exbold'>اپلیکیشن سارنگ</h2>
            </div> */}
            {/* <div className='bg-white rounded-[25px] py-5 w-[80%] lg:w-[60%] mx-auto mt-10 shadow-lg shadow-[#0000000d] overflow-hidden flex flex-col lg:flex-row items-center justify-center gap-5 px-6 lg:p-6'>
                <Image width={200} height={200} src={star} alt='' className='lg:-mr-28  bg-white' />
                <p className='text-justify text-[#000000] max-w-[480px] lg:ml-5 text-[14px] lg:text-[16px] font-estedad-medium'>
                    اپلیکیشن سارنگ یک برنامه بومی که با استفاده از دانش بومی جوانان ایرانی ، برای سهولت در پرداخت ها بدون نیاز به پول فیزیکی ، پرداخت های خود را انجام دهید که در کنار این سهولت با امنیت ۱۰۰ درصد تراکنش ها و فعالیت های کاربران صورت گرفته است.
                </p>
            </div> */}
        </div>
    )
}
