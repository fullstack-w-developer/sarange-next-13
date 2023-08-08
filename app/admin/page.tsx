import React from "react";
import { getUserListAdmin, getUserListWithPermissions } from "@/server/admin/actions";
import { User } from "@/types/User";
import Users from "./Users";
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
