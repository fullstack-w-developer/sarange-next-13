import React from "react";
import { getDriversListWithPermissions } from "@/server/admin/actions";
import Drivers from "./Drivers";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Driver = async ({ searchParams }: Props) => {
    const list: any = await getDriversListWithPermissions(searchParams?.q!, searchParams?.skip!);
    return <Drivers list={list} />;
};

export default Driver;
