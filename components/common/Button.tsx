import React from "react";
import ButtonMui from "@mui/material/Button";
interface Props {
    name: string;
    onClick?: () => void;
    isLoading?: boolean;
    className?: string;
    icon?:any
}
const Button = ({ name, onClick,icon, isLoading, className = "!bg-orange" }: Props) => {
    return (
        <ButtonMui
            disabled={isLoading}
            onClick={onClick}
            variant="contained"
            className={`h-[48px] gap-2 text-[16px]  !text-white !font-artin-bold w-full  !shadow-none ${className}`}
        >
            {icon}
            {isLoading ? "در حال بررسی" : name}
        </ButtonMui>
    );
};

export default Button;
