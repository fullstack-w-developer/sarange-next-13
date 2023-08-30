import React from "react";
import Counters from "./Counters";
import { getCountersListWithPermissions } from "@/server/admin/counter";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Admin = async ({ searchParams }: Props) => {
    const list: any = await getCountersListWithPermissions(searchParams?.q!, searchParams?.skip!);
    return <Counters list={list} />;
};

export default Admin;
