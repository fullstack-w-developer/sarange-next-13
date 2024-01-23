"use client"
import React from "react";
import dynamic from "next/dynamic";
const Forgetpass = dynamic(()=>import("./ForgetPass"),{ssr:false})
const Forget = () => {
    return <Forgetpass />;
};

export default Forget;
