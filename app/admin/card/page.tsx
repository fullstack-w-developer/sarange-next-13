import React from "react";
import Cards from "./Cards";
import { getCardsListWithPermissions } from "@/server/admin/card";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Admin = async ({ searchParams }: Props) => {
    const list: any = await getCardsListWithPermissions(searchParams?.q!, searchParams?.skip!);
    return <Cards list={list} />;
};

export default Admin;
