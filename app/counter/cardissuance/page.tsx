"use client";
import React from "react";
import ScanComponent from "./Scan";
import GetCode from "./GetCode";
import VerifyCode from "./VerifyCode";
import Information from "./Information";
import useCounterStore from "@/stores/counter-store";
import CardUser from "./CardUser";

const CardIssuance = () => {
    const { step } = useCounterStore();
    return (
        <div>
            {step === 0 && <GetCode />}
            {step === 1 && <VerifyCode />}
            {step === 2 && <ScanComponent />}
            {step === 3 && <Information />}
            {step === 4 && <CardUser />}
        </div>
    );
};

export default CardIssuance;
