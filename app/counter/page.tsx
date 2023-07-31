import Button from "@/components/common/Button";
import Menu from "@/components/common/Menu";
import { counterList } from "@/helper/utils/data";
import Link from "next/link";
import React from "react";

const Counter = () => {
    return (
        <div className="w-90 flex justify-center items-center min-h-screen">
            <div className="w-full flex flex-col gap-4">
                <Link href="/counter/scan">
                    <Button name="با اسکن" />
                </Link>
                <Link href="/counter/serial">
                    <Button name="با شماره سریال" />
                </Link>
            </div>
            <Menu menu={counterList} />
        </div>
    );
};

export default Counter;
