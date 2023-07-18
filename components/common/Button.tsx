import React from 'react'
import ButtonMui from '@mui/material/Button';
interface Props{
    name: string;
}
const Button = ({name}:Props) => {
    return (
        <ButtonMui variant="contained" className='h-[48px] text-[16px] font-artin-bold w-full !bg-orange  !shadow-shadowBtn'>{name}</ButtonMui>
    )
}

export default Button