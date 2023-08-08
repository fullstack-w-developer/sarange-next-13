import Button from "@/components/common/Button";
import CardBank from "@/components/common/CardBank";
import useDeactiveCardUserByCounterMutation from "@/hooks/mutation/counter/useDeactiveCardUserByCounterMutation";
import useGetCounterActiveCardUser from "@/hooks/query/counter/useGetCounterActiveCardUser";
import useCounterStore from "@/stores/counter-store";
import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

const CardUser = () => {
    const { information } = useCounterStore();
    const { mutate, isLoading: isLoadingDeactive } = useDeactiveCardUserByCounterMutation(true);
    const { isLoading, data } = useGetCounterActiveCardUser({ phone: information.phone });
    return (
        <div className="w-90 min-h-screen flex flex-col justify-between">
            {isLoading ? (
                "Loading"
            ) : (
                <div className="mt-10">
                    <CardBank card={data} />
                </div>
            )}
            <div className="flex items-center gap-6 mb-4">
                <Link href="/counter">
                    <Button
                        icon={<GoArrowRight />}
                        className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                        name="انصراف"
                    />
                </Link>
                <Button
                    isLoading={isLoadingDeactive}
                    onClick={() => mutate(data._id)}
                    name="غیر فعال سازی"
                    className="!bg-green-600  text-white"
                />
            </div>
        </div>
    );
};

export default CardUser;
