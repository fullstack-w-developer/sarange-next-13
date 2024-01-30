import React from 'react'
import ButtonMui from "@mui/material/Button"
import { CircularProgress } from '@mui/material';
type Props = {
  name: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
}
const Button = ({ name, className, type, isLoading }: Props) => {
  return (
    <div>
      <ButtonMui disabled={isLoading} type={type} style={{ background: "#F0C414", color: "white" }} sx={{ boxShadow: 4 }} className={`!w-full !h-[48px] ${className}`}>
        {
          isLoading ? <CircularProgress color='inherit' size={30}/> : name
        }
      </ButtonMui>
    </div>
  )
}

export default Button