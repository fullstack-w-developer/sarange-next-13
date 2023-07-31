import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

const Resut = () => {
    return (
        <Link href="/driver/profile" className="min-h-screen flex justify-center items-center w-90">
            <Button name="بازگشت به صحفه اصلی" />
        </Link>
    );
};

export default Resut;
