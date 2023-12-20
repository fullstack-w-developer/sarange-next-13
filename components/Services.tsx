import { socialNetworks } from '@/helper/utils/data';


export default function Services() {
    return (
        <div className='mt-[120px]'>
            <div className='bg-[#F67D14] h-[2px] w-full'></div>
            <div className='w-full flex items-center justify-center '>
                <h2 className='bg-[#F67D14] text-white py-2 px-8 rounded-b-[25px] text-[17px] lg:text-[20px] font-estedad-bold'>طراحی اپلیکیشن چه مراحلی دارد؟</h2>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6  gap-10 mt-10 font-es_medium'>
                {socialNetworks.map((item, index) => {
                    return (
                        <div key={index} className='rounded-[50px] h-[55px] px-2 shadow-lg shadow-[#0000000d] bg-white flex flex-col gap-5 items-center justify-center'>
                            <p className=' text-[14px] text-center font-artin-regular lg:text-[16px]'>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
