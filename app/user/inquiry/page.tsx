import { getInquiry } from "@/server/user/actions";
import { Driver } from "@/types/Driver";
import InformationDriver from "./InformationDriver";
interface Props {
    searchParams?: { [key: string]: string | string[] | undefined };
}
const Inquiry = async ({ searchParams }: Props) => {
    const driver: Driver = await getInquiry(Number(searchParams?.code!));
    return (
        <div className="min-h-screen w-90 bg-white flex flex-col justify-between gap-20">
            <InformationDriver paymentType={searchParams?.type} driver={driver} />
        </div>
    );
};

export default Inquiry;
