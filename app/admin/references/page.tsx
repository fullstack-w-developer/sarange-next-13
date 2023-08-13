import { getReferences } from "@/server/admin/actions";
import React from "react";
import References from "./References";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Page = async ({ searchParams }: Props) => {
    const references: { Total: number; Resources: any[] } = await getReferences(searchParams?.q!, searchParams?.skip!);
    return <References references={references} />;
};

export default Page;
