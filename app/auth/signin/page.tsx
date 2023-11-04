import React from "react";
import dynamic from "next/dynamic";
const Login = dynamic(()=>import("./Login"),{ssr:false})
const Signin = () => {
    return <Login />;
};

export default Signin;
