import React from "react";
import Drivers from "./Drivers";
import { getDriversListWithPermissions } from "@/server/admin/driver";
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
