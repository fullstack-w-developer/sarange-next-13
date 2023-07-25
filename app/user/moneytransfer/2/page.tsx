import ProfileImage from "@/components/common/ProfileImage";
import { getDetaisUserBySerialCard } from "@/server/user/actions";
import { User } from "@/types/User";
import Image from "next/image";
import React from "react";
import ImageTransform from "@/assets/images/transform.jpeg";
import { BsCheckCircleFill } from "react-icons/bs";
import CardInfo from "./CardInfo";
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
    return  <Form details={details} />
   
    
};

export default Step2;
