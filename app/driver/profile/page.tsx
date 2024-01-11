import React from "react";
import Profile from "./Profile";
import { getDriver } from "@/server/driver/action";


const Index = async () => {
    const user = await getDriver()
    return <>
    <Profile user={user}/>
    </>;
};

export default Index;
