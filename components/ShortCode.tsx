import Image from 'next/image'
import code from "../assest/images/static__svg__ussd.svg"

export default function ShortCode() {
    return (
        <div className='bg-white w-full flex items-center justify-center shadow-lg shadow-[#0000000d] mt-[120px] py-5'>
            <Image src={code} alt='' />
        </div>
    )
}
