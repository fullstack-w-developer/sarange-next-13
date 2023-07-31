import DriverLayout from "@/components/driver/DriverLayout";
import { getDriver } from "@/server/driver/action";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
    const driver = await getDriver();
    return <DriverLayout user={driver}>{children}</DriverLayout>;
};

export default Layout;
