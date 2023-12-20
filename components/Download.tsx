
import Slider from './Slider';

export default function Download() {
    return (
        <div className='mt-16 flex flex-col-reverse gap-10 md:flex-row items-center justify-between'>
            <div className='flex-1 text-[#000000] text-[14px]'>
                <div className='space-y-3'>
                    <h1 className='mb-5 font-estedad-exbold text-[20px]'>
                         سارنگ
                    </h1>
                    <p className='text-justify font-estedad-medium leading-7 text-[14px]'>اگر صاحب کسب و کاری هستید یا قصد راه اندازی کسب و کاری را دارید و می خواهید فروش خدمات و محصولات خود را افزایش دهید باید به فکر طراحی اپلیکیشن باشید. چرا که اپلیکیشن فرآیند خرید و ارتباط با مشتری را آسان تر می کند. اپلیکیشن به شما کمک می کند مزیت های رقابتی خود را افزایش دهید و از رقبای خود متمایز شوید.

البته طراحی اپلیکیشن باید کاملا حرفه ای و اختصاصی باشد که بتوان بازخورد لازم را از آن کسب کرد. اپلیکیشن باید UI/UX اختصاصی و خوب داشته باشد تا کاربران را جذب خود کند. خلاقیت در طراحی اپ و توسعه اپ را فرموش نکنید. سرعت لود اپلیکیشن یکی دیگر از موارد مهمی است باید توجه ویژه ای به آن داشت.
                    </p>
                    <p className='font-estedad-medium text-[14px]'>مزایایی ساخت اپلیکیشن :</p>
                    <p className='font-estedad-medium text-[12px] text-neutral-600'>بزرگترین مزیت طراحی اپ همگام بودن کسب و کارها با تکنولوژی است. اما اپلیکیشن مزیت های دیگری نیز دارد که در ادامه به آنها اشاره می کنیم:</p>
                    <ul className='font-artin-regular text-[14px] space-y-2'>
                        <li className='list-disc'>خدمت رسانی بهتر و راحت به مشتری</li>
                        <li className='list-disc'>24 ساعته در دسترس مشتری</li>
                        <li className='list-disc'>رشد و توسعه برند تجاری</li>
                        <li className='list-disc'>افزایش تعداد راه های ارتباطی</li>
                        <li className='list-disc'>برقراری ارتباط و تعامل دوسویه با مشتریان</li>
                    </ul>
                </div>
            </div>
            <div className='flex-1 overflow-hidden'>
                <div className='flex justify-end'>
                    <Slider />
                </div>

            </div>
        </div>
    )
}
