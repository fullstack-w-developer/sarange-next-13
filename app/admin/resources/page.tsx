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
    return <div className="flex flex-col flex-1">
        <h1 className="text-center text-3xl text-[#222] font-artin-black w-full py-4">منابع</h1>
        <References references={references} />
    </div>
};

export default Page;
