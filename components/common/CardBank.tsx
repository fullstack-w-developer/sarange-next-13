"use client";
import useDeActiveCardMutation from "@/hooks/mutation/user/useDeActiveCardMutation";
import { TypeCardBank } from "@/types/Card";
import { Switch } from "@mui/material";
import React from "react";
interface Props {
    card: TypeCardBank;
    disabled?: boolean;
    deActiveCard?: (id: string) => void;
}

const CardBank = ({ card, disabled, deActiveCard }: Props) => {
    const [checked, setChecked] = React.useState(card.Status);
    const { mutate } = useDeActiveCardMutation();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (deActiveCard) {
            deActiveCard(card._id!);
        }
        mutate(card._id);
    };

    return (
        <div className=" w-full h-[180px] flex flex-col justify-between bg_cards p-2 rounded-lg">
            {deActiveCard ? (
                <div className="flex items-center justify-between">
                    <span className="font-artin-regular">آیا میخواهید کارت را غیر فعال کنید؟</span>
                    <Switch onChange={handleChange} disabled={disabled} checked={checked} color="warning" />
                </div>
            ) : (
                <div className="flex items-center justify-between">
                    <p className="font-artin-bold text-[#626262] pl-2">نام و نام خانوادگی: </p>
                    <p className="font-artin-bold text-md text-[#222]">
                        {card.FirstName} {card.LastName}
                    </p>
                </div>
            )}
            <div className="flex items-center justify-between ">
                <p className="font-artin-bold text-[#626262] pl-2 ">موجودی کارت</p>

                <div className="flex items-center gap-1 justify-end">
                    <p className="font-artin-bold text-2xl text-[#222]">{card.Balance.toLocaleString()}</p>
                    <span className="font-artin-regular text-[#626262]">تومان</span>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="font-artin-regular text-[#626262]">تاریخ صدور</p>
                    <p className="font-artin-bold text-md text-[#222]">{new Date(card.CreatedAt).toLocaleDateString("fa-IR")}</p>
                </div>
                <div className="flex items-center justify-between ">
                    <p className="font-artin-bold text-[#626262] pl-2">شماره سریال</p>

                    <div className="flex items-center gap-1 justify-end">
                        <p className="font-artin-bold text-2xl text-[#222]">{card.Serial}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBank;
