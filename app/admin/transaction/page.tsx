import React from "react";
import TransactionsCom from "./Transactions";
import { getTransactionsListWithPermissions } from "@/server/admin/transaction";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Transactions = async ({ searchParams }: Props) => {
    const list: any = await getTransactionsListWithPermissions(searchParams?.q!, searchParams?.skip!);

    return <TransactionsCom list={list} />;
};

export default Transactions;
