"use client"
import React from "react";
import dynamic from "next/dynamic";
const GetOtp = dynamic(()=>import("./GetOtp"),{ssr:false})
const Signup = () => {
    return <GetOtp />;
};

export default Signup;
