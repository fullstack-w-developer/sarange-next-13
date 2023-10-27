import { AiFillAndroid } from 'react-icons/ai';
import { BsApple } from 'react-icons/bs';
import Slider from './Slider';

export default function Download() {
    return (
        <div className='mt-16 flex flex-col-reverse gap-10 md:flex-row items-center justify-between'>
            <div className='flex-1 text-[#000000] text-[14px]'>
                <div className='space-y-3'>
                    <h1 className='mb-5 font-es_bold text-[20px]'>
                        اپلیکیشن سارنگ
                    </h1>
                    <p className='text-justify font-es_medium text-[14px]'>اپلیکیشن سارنگ یک برنامه ای کاربردی و چندمنظوره است که با استفاده از آن بر روی گوشی خود میتوانید برخی از کارهای روزمره خودتان را به سادگی از طریق آن انجام دهید.
                    </p>
                    <p className='font-es_medium text-[14px]'>برخی امکانات مهم اپلیکیشن:</p>
                    <ul className='font-es_medium text-[14px] space-y-2'>
                        <li className='list-disc'>امکان پرداخت کرایه در خطوط حمل و نقل عمومی به صورت الکترونیک</li>
                        <li className='list-disc'>امکان پرداخت از طریق QR</li>
                        <li className='list-disc'>امکان پرداخت از طریق کارت بانکی</li>
                        <li className='list-disc'>امکان چرداخت از طریف تاکسی کارت</li>
                        <li className='list-disc'>امکان انتقال شارژ و اعتبار در داخل اپلیکیشن</li>
                    </ul>
                </div>
            </div>
            <div className='flex-1'>
                <div className='flex justify-end'>
                    <Slider />
                </div>

            </div>
        </div>
    )
}
