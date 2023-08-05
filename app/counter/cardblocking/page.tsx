"use client"
import useCounterStore from "@/stores/counter-store";
import React from "react";
import VerifyCode from "./VerifyCode";
import CardUser from "./CardUser";
import GetCode from "./GetCode";

const CardBlocking = () => {
    const { stepCardblocking } = useCounterStore()
    return <div>
        {stepCardblocking === 0 && <GetCode />}
        {stepCardblocking === 1 && <VerifyCode />}
        {stepCardblocking === 2 && <CardUser />}
    </div>;
};

export default CardBlocking;
