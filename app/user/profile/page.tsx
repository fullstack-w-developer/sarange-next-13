import React from "react";
import Profile from "./Profile";
import { getUser } from "@/services/user";

const InformationUser = async () => {
    const user = await getUser();

    return <Profile user={user} />;
};

export default InformationUser;
