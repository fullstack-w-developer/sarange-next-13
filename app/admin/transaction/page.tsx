import React from "react";
import {  getTransactionsListWithPermissions, getUserListWithPermissions } from "@/server/admin/actions";
import TransactionsCom from "./Transactions";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Transactions = async ({ searchParams }: Props) => {
    const list: any = await getTransactionsListWithPermissions(searchParams?.q!, searchParams?.skip!);
    return <TransactionsCom list={list}/>
};

export default Transactions;
