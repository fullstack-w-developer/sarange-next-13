import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";

const Result = () => {
    return (
        <div className="min-h-screen w-90 flex flex-col gap-20 justify-center items-center">
            <div className="flex justify-center flex-col items-center gap-4">
                <BsShieldFillCheck color="#19B500" size={142} />
                <h1 className="text-center font-artin-bold text-xl">انتقال وجه با موفقیت انجام شد</h1>
            </div>

            <Link className="!block w-full" href="/user">
                <Button name="بازگشت" />
            </Link>
        </div>
    );
};

export default Result;
