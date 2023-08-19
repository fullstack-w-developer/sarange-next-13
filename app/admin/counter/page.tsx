import React from "react";
import { getCountersListWithPermissions } from "@/server/admin/actions";
import Counters from "./Counters";
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
