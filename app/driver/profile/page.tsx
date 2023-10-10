import React from "react";
import Profile from "./Profile";
import { getDriver } from "@/services/driver";


const Index = async () => {
    const user = await getDriver()
    return <>
    <Profile user={user}/>
    </>;
};

export default Index;
