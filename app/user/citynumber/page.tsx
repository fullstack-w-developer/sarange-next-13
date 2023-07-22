import React from "react";
import CityNumber from "./CityNumber";
import { getUser } from "@/server/user/actions";

const Page = async () => {
    const user = await getUser();
    return <CityNumber user={user} />;
};

export default Page;
