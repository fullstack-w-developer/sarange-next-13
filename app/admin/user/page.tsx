import React from "react";
import Users from "./Users";
import { getUserListWithPermissions } from "@/server/admin/user";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Admin = async ({ searchParams }: Props) => {
    const list: any = await getUserListWithPermissions(searchParams?.q!, searchParams?.skip!);
    return <Users list={list} />;
};

export default Admin;
