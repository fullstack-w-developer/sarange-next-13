import UserLayout from "@/components/user/UserLayout";
import { getUser } from "@/server/user/actions";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
    const user = await getUser();
    return <UserLayout user={user}>{children}</UserLayout>;
};

export default Layout;
