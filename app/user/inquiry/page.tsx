import { getInquiry } from "@/server/user/actions";
import { Driver } from "@/types/Driver";
import InformationDriver from "./InformationDriver";
import { notFound } from "next/navigation";

interface Props {
    searchParams?: { [key: string]: string | string[] | undefined };
}
const Inquiry = async ({ searchParams }: Props) => {
    const driver: Driver = await getInquiry(Number(searchParams?.code!));
    if (!driver?.CarRoute?.Name) return notFound();
    return <InformationDriver paymentType={searchParams?.type} driver={driver} />;
};

export default Inquiry;
