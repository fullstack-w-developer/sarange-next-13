import React from "react";
import RouteCom from "./RouteCom";
import { getRoutesWithPermissions } from "@/server/admin/route";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Route = async ({ searchParams }: Props) => {
    const routes: any = await getRoutesWithPermissions(searchParams?.q!, searchParams?.skip!);
    return <RouteCom list={routes} />;
};

export default Route;
