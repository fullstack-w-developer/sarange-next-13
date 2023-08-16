import { getRoutesWithPermissions } from "@/server/admin/actions";
import React from "react";
import WithdrawCom from "./WithdrawCom";
import { getWithdrawalsPermissions } from "@/server/admin/withdrawals";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Withdraw = async ({ searchParams }: Props) => {
    const list: any = await getWithdrawalsPermissions(searchParams?.q!, searchParams?.skip!);
    console.log(list, "jjjjjjjj");
    return <WithdrawCom list={list} />;
};

export default Withdraw;
