import React from 'react'
interface Props {
    placeholder?: string;
    IconLeft?:any
}
const Textarea = ({IconLeft,placeholder}:Props) => {
    const Icon = () => <IconLeft className="text-black" />
    return (
        <div className="w-full h-[137px] px-4 py-[15px] bg-neutral-100 rounded-[15px] justify-between flex">
            <textarea placeholder={placeholder} className='placeholder:opacity-45 resize-none h-full w-full bg-transparent outline-none text-right text-black text-sm font-regular' />
            {IconLeft && <Icon />}
        </div>
    )
}

export default Textarea