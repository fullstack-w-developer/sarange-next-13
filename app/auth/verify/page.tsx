"use client"
import React from "react";
import dynamic from "next/dynamic";
const VerifyOtp = dynamic(()=>import("./VerifyOtp"),{ssr:false})
const Verify = () => {
    return <VerifyOtp />;
};

export default Verify;
