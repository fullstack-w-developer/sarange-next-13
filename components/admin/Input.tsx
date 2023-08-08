import React from "react";
interface Props {
    icon?: JSX.Element;
    placeholder?: string;
    classInput?: string;
    ltr?: boolean;
    label?: string;
    placeholderColor?: string;
    classInputTag?: string;
    name?: string;
    type?: string;
    defaultValue?:string
}
const Input = ({ icon, placeholder, classInput, ltr, label, classInputTag, name, type,defaultValue }: Props) => {
    return (
        <div>
            {label && <label className="font-artin-regular block mb-1 pr-1 text-[#2F2F2F]">{label}</label>}
            <div
                className={`flex gap-1 w-full h-[48px] border bg-[#EFF2F6]  rounded-lg px-2 items-center  ${classInput}`}
            >
                {icon}
                <input
                defaultValue={defaultValue}
                    type={type}
                    name={name}
                    className={`bg-transparent outline-none placeholder:text-right font-artin-regular  text-[14px] w-full text-inherit placeholder:text-[#d6d6d6] ${classInputTag}  ${
                        ltr ? "ltr" : "rtl"
                    }`}
                    placeholder={placeholder}
                    autoComplete="off"
                />
            </div>
        </div>
    );
};

export default Input;
