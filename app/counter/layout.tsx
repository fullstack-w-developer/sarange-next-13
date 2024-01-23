import CounterLayout from "@/components/counter/CounterLayout";
import { getCounter } from "@/server/counter/action";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
    const user = await getCounter();
    return <CounterLayout user={user}>{children}</CounterLayout>;
};

export default Layout;
