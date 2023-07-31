import CardTransaction from "@/components/common/CardTransaction";
import { getTrasactions } from "@/server/common/action";
import { Transaction } from "@/types/User";
import React from "react";

const Transactions = async () => {
    const transactions: Transaction[] = await getTrasactions();
    return (
        <>
            <div className="w-90 flex flex-col gap-5 mt-10 pb-20">
                {transactions.map((transaction, index) => (
                    <CardTransaction transaction={transaction} key={index} />
                ))}
            </div>
        </>
    );
};

export default Transactions;
