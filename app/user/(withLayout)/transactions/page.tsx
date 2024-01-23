import CardTransaction from "@/components/common/CardTransaction";
import { getTrasactions } from "@/server/counter/action";
import React from "react";

const Transactions = async () => {
    const transactions: any = await getTrasactions();
    console.log(transactions)
    return (
        <>
            <div className="w-90 flex flex-col gap-5 mt-10 pb-20">
                {transactions.data.Transactions.map((transaction:any, index:number) => (
                    <CardTransaction transaction={transaction} key={index} />
                ))}
            </div>
        </>
    );
};

export default Transactions;
