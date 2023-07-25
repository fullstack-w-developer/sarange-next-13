import { Transaction } from "@/types/User";
import React from "react";
import { PiCoins } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import { Calender_icon } from "../icons/icons";

interface Props {
    transaction: Transaction;
}
const CardTransaction = ({ transaction }: Props) => {
    let options = { year: "numeric", month: "long", day: "numeric" };

    const date = new Date(transaction.createdAt);

    const hour = date.getHours();
    const minute = date.getMinutes();
    const isPay = transaction.TransactionType === "پرداخت کرایه" || transaction.TransactionType === "کارت به کارت"
    return (
        <div className="border-b bprder-gray-200 pb-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className={`w-14 h-14 flex justify-center rounded-full items-center ${isPay ? "bg-[#FF1212]" : "bg-[#19B500]"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 17 17" fill="none">
                        <path d="M8.97187 11.1719H7.67938C6.76501 11.1719 6.01562 10.4019 6.01562 9.45316C6.01562 9.17129 6.24938 8.93754 6.53125 8.93754C6.81313 8.93754 7.04688 9.17129 7.04688 9.45316C7.04688 9.83129 7.32876 10.1407 7.67938 10.1407H8.97187C9.23999 10.1407 9.45312 9.90004 9.45312 9.60441C9.45312 9.23316 9.35001 9.17816 9.11626 9.09566L7.04688 8.37378C6.60688 8.21566 6.01562 7.89941 6.01562 6.88879C6.01562 6.02941 6.69626 5.32129 7.52813 5.32129H8.82062C9.73499 5.32129 10.4844 6.09129 10.4844 7.04004C10.4844 7.32191 10.2506 7.55566 9.96875 7.55566C9.68688 7.55566 9.45312 7.32191 9.45312 7.04004C9.45312 6.66191 9.17124 6.35254 8.82062 6.35254H7.52813C7.26001 6.35254 7.04688 6.59316 7.04688 6.88879C7.04688 7.26004 7.14999 7.31503 7.38374 7.39753L9.45312 8.11941C9.89313 8.27753 10.4844 8.59379 10.4844 9.60441C10.4844 10.4707 9.80374 11.1719 8.97187 11.1719Z" fill="white" />
                        <path d="M8.25 11.8594C7.96813 11.8594 7.73438 11.6256 7.73438 11.3438V5.15625C7.73438 4.87438 7.96813 4.64062 8.25 4.64062C8.53188 4.64062 8.76562 4.87438 8.76562 5.15625V11.3438C8.76562 11.6256 8.53188 11.8594 8.25 11.8594Z" fill="white" />
                        <path d="M8.25 15.6406C4.17313 15.6406 0.859375 12.3269 0.859375 8.25C0.859375 4.17313 4.17313 0.859375 8.25 0.859375C8.53188 0.859375 8.76562 1.09313 8.76562 1.375C8.76562 1.65688 8.53188 1.89062 8.25 1.89062C4.74375 1.89062 1.89062 4.74375 1.89062 8.25C1.89062 11.7563 4.74375 14.6094 8.25 14.6094C11.7563 14.6094 14.6094 11.7563 14.6094 8.25C14.6094 7.96812 14.8431 7.73438 15.125 7.73438C15.4069 7.73438 15.6406 7.96812 15.6406 8.25C15.6406 12.3269 12.3269 15.6406 8.25 15.6406Z" fill="white" />
                        <path d="M15.125 4.64062C14.8431 4.64062 14.6094 4.40687 14.6094 4.125V1.89062H12.375C12.0931 1.89062 11.8594 1.65688 11.8594 1.375C11.8594 1.09313 12.0931 0.859375 12.375 0.859375H15.125C15.4069 0.859375 15.6406 1.09313 15.6406 1.375V4.125C15.6406 4.40687 15.4069 4.64062 15.125 4.64062Z" fill="white" />
                        <path d="M11.6875 5.32811C11.5569 5.32811 11.4262 5.27999 11.3231 5.17686C11.1237 4.97749 11.1237 4.64749 11.3231 4.44812L14.7606 1.01062C14.96 0.81124 15.29 0.81124 15.4894 1.01062C15.6887 1.20999 15.6887 1.53999 15.4894 1.73936L12.0519 5.17686C11.9487 5.27999 11.8181 5.32811 11.6875 5.32811Z" fill="white" />
                    </svg>
                </div>
                <div className="space-y-2">
                    <p className="font-artin-bold text-lg text-[#373938]">{transaction.TransactionType}</p>
                    <p className="font-artin-regular text-[14px] flex items-center gap-2 text-[#76858C]">
                        <span >{toFarsiNumber(`${hour + ":" + minute}`)}</span>
                        {/* @ts-ignore */}
                        {new Date(transaction.createdAt).toLocaleDateString("fa-IR",options)}
                    </p>
                </div>
            </div>
            <div>
                <p className="font-artin-bold text-[#373938] text-lg">{transaction.Amount.toLocaleString()} تومان</p>
            </div>
        </div>
        // <div className=" bg-white shadow rounded-lg p-2">
        //     <div className="flex items-center justify-between border-b border-gray-200 pb-2">
        //         <div className="flex items-center gap-2 text-gray-700">
        //             <PiCoins size={24} />
        //             <p className="font-artin-bold text-lg">مبلغ تراکنش :</p>
        //             <p className="font-artin-regular text-orange">{transaction.Amount.toLocaleString()}</p>
        //         </div>
        //         <p className="font-estedad-bold text-[12px] flex items-center gap-2 text-gray-600">
        //             <span className="font-estedad-bold">{toFarsiNumber(`${hour + ":" + minute}`)}</span>
        //             {/* @ts-ignore */}
        //             {new Date(transaction.createdAt).toLocaleDateString("fa-IR")}
        //             <Calender_icon />
        //         </p>
        //     </div>
        //     <div className="flex items-center gap-2 pt-3 text-gray-700">
        //         <GiPayMoney size={24} />
        //         <p className="font-artin-bold text-lg">نوع پرداخت :</p>
        //         <p className="font-artin-regular text-orange">{transaction.TransactionType}</p>
        //     </div>
        // </div>
    );
};

export default CardTransaction;
