import ProfileInfo from "@/components/common/ProfileInfo";
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
        <div>
            <ProfileInfo totalNotfications={notfication[0].Total} user={user} />
            {children}
        </div>
    );
};

export default Layout;
