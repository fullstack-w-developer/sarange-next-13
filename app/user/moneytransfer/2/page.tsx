"use client"
import { getDetaisUserBySerialCard } from "@/server/user/actions";
import React from "react";
import Form from "./Form";

type Props = {
    params?: {
        id?: string;
    };
    searchParams?: {
        id?: string;
    };
};
const Step2 = async ({ searchParams }: Props) => {
    const details: any = await getDetaisUserBySerialCard(searchParams?.id!);
    return <Form details={details} />;
};

export default Step2;
