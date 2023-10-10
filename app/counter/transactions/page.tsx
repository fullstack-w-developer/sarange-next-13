import CardTransaction from "@/components/common/CardTransaction";
import { getTrasactions } from "@/server/counter/action";
import { ResponseTransactionPage } from "@/types/Counter/ResponseTransactionPage";
import { Transaction } from "@/types/User";
import React from "react";

const Index = async () => {
    const data: ResponseTransactionPage = await getTrasactions();
    if (!data.status) throw new Error("error");

    return (
        <>
            <div className="w-90 flex flex-col gap-5 mt-10 pb-20">
                {data?.data.Transactions.map((transaction, index) => (
                    <CardTransaction transaction={transaction} key={index} />
                ))}
            </div>
        </>
    );
};

export default Index;
