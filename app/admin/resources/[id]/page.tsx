import { getAllAttribute, getReferences } from "@/server/admin/actions";
import React from "react";
import Attribute from "./Attribute";
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
    params:{
        id:string
    }
}
const Page = async ({ searchParams, params }: Props) => {
    const attribute: { Total: number; Attributes: any[] } = await getAllAttribute(params?.id!,searchParams?.q!,searchParams?.skip);
    return <Attribute id={params.id} attributes={attribute}/>;
};

export default Page;
