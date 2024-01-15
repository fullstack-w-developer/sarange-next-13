import React from "react";
import Profile from "./Profile";
import { getCounter } from "@/server/counter/action";


const Index = async () => {
    const user = await getCounter()
    return <>
        <Profile user={user} />
    </>
};

export default Index;
