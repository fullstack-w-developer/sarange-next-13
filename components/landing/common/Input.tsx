import React from 'react'
interface Props {
    placeholder?: string;
    IconLeft?:any
}
const Input = ({ placeholder,IconLeft }: Props) => {
    const Icon = ()=> <IconLeft className="text-black"/>
    return (
        <div className="w-full h-[53px] px-4 py-[15px] bg-neutral-100 rounded-[15px] justify-between items-center inline-flex">
            <input placeholder={placeholder} className='placeholder:opacity-45 w-full bg-transparent outline-none text-right text-black text-sm font-regular' />
            {IconLeft && <Icon/>}
        </div>
    )
}

export default Input