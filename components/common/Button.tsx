import React from 'react'
import ButtonMui from '@mui/material/Button';
interface Props{
    name: string;
    onClick?:()=>void;
    isLoading?: boolean;
    className?:string
}
const Button = ({name, onClick, isLoading,className="!bg-orange"}:Props) => {
    return (
        <ButtonMui disabled={isLoading} onClick={onClick} variant="contained" className={`h-[48px] text-[16px] font-artin-regular w-full  !shadow-none ${className}`}>{name}</ButtonMui>
    )
}

export default Button