import Button from "@/components/common/Button";
import CardBank from "@/components/common/CardBank";
import { getUserInfoBySerialCardCounter } from "@/server/counter/action";
import { TypeCardBank } from "@/types/Card";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { GoArrowRight } from "react-icons/go";
interface Props {
    searchParams?: { id?: string };
}
const Information = async ({ searchParams }: Props) => {
    const cardInfo: TypeCardBank = await getUserInfoBySerialCardCounter(searchParams?.id!);
    if (!cardInfo._id) return notFound();
    return (
        <div className="w-90 flex flex-col justify-between min-h-screen">
            <div>
                <h6 className="font-artin-black my-7 pr-1 text-xl">مشخصات فرد</h6>
                <CardBank card={cardInfo} />
            </div>
            <div className=" pb-6 flex gap-4 items-center w-full">
                <Link className="block " href="/counter">
                    <Button
                        icon={<GoArrowRight />}
                        className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                        name="بازگشت"
                    />
                </Link>
                <Link className="block w-full" href={`/counter/inquiry?id=${cardInfo._id}`}>
                    <Button name="مرحله بعد" className="!bg-green-600  text-white" />
                </Link>
            </div>
        </div>
    );
};

export default Information;
