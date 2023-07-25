import { Dialog, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";
import useRateToTaxiMutation from "@/hooks/mutation/user/useRateToTaxiMutation";
import useUserStore from "@/stores/user-store";

const Rate = () => {
    const [error, setError] = useState("");
    const { toggleOpenRate, openRate } = useUserStore();
    const [value, setValue] = React.useState<number | null>(null);
    const { mutate } = useRateToTaxiMutation();
    const onClick = () => {
        if (value === null) return setError("امتیاز ثبت نشده است");
        toggleOpenRate();
        mutate({ star: value });
    };

    useEffect(() => {
        toggleOpenRate();
    }, []);
    return (
        <Dialog open={openRate} maxWidth="md" fullWidth>
            <div className="p-3">
                <div className="flex gap-1 py-2 items-center justify-center font-artin-bold text-2xl">
                    <AiFillStar className="text-[#faaf00]" />
                    <p className="text-center">امتیاز به راننده</p>
                </div>
                <div className="flex mt-5 flex-col ltr justify-center items-center">
                    <Rating
                        size="large"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    {error && <span className="text-red-500 font-artin-regular pt-3">{error}</span>}
                </div>

                <div className=" mt-14 flex gap-4 items-center">
                    <Button
                        onClick={toggleOpenRate}
                        className="custom_btn  !min-w-[120px] !bg-transparent text-black flex-1"
                        name="انصراف"
                    />
                    <Button onClick={onClick} name="ثبت امتیاز" className="!bg-green-600 flex-1 text-white" />
                </div>
            </div>
        </Dialog>
    );
};

export default Rate;
