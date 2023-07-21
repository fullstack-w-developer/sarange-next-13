import React from "react";
import ButtonMui from "@mui/material/Button";
interface Props {
    name: string;
    onClick?: () => void;
    isLoading?: boolean;
    className?: string;
}
const Button = ({ name, onClick, isLoading, className = "!bg-orange" }: Props) => {
    return (
        <ButtonMui
            disabled={isLoading}
            onClick={onClick}
            variant="contained"
            className={`h-[48px] text-[16px] !text-white !font-artin-bold w-full  !shadow-none ${className}`}
        >
            {isLoading ? "در حال بررسی" : name}
        </ButtonMui>
    );
};

export default Button;
