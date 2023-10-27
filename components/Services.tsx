import { socialNetworks } from '@/helper/utils/data';


export default function Services() {
    return (
        <div className='mt-[120px]'>
            <div className='bg-[#F67D14] h-[2px] w-full'></div>
            <div className='w-full flex items-center justify-center '>
                <h2 className='bg-[#F67D14] text-white py-2 px-8 rounded-b-[25px] text-[17px] lg:text-[20px] font-es_bold'>خدمات ما</h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-5  gap-10 mt-10 font-es_medium'>
                {socialNetworks.map((item, index) => {
                    return (
                        <div key={index} className='rounded-[50px] p-5 shadow-lg shadow-[#0000000d] bg-white flex flex-col gap-5 items-center justify-center'>
                            <div></div>
                            <p className=' text-[14px] text-center lg:text-[16px]'>{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
