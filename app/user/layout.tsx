import UserLayout from "@/components/user/UserLayout";
import { getUnreadNotifications } from "@/server/common/action";
import { getUser } from "@/server/user/actions";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
    const user = await getUser();
    const notfication = await getUnreadNotifications();
    return (
        <UserLayout totalNotfications={notfication[0].Total} user={user}>
            {children}
        </UserLayout>
    );
};

export default Layout;
