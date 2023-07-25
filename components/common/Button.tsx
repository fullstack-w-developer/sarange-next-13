import React from "react";
import ButtonMui from "@mui/material/Button";
interface Props {
    name?: string;
    onClick?: () => void;
    isLoading?: boolean;
    className?: string;
    icon?: any;
}
const Button = ({ name, onClick, icon, isLoading, className = "!bg-orange" }: Props) => {
    return (
        <ButtonMui
            disabled={isLoading}
            onClick={onClick}
            variant="contained"
            sx={{height:50}}
            className={` gap-2 text-[16px]  whitespace-nowrap !font-artin-bold w-full  !shadow-none ${
                className ? className : "!text-white"
            }`}
        >
            {icon}
            {isLoading ? "در حال بررسی" : name}
        </ButtonMui>
    );
};

export default Button;
