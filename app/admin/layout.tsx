import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { getPermissionsSidebar } from "@/server/admin/actions";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = async ({ children }: Props) => {
    const sidebar = await getPermissionsSidebar()
    return (
        <div>
            <Header />
            <div className="flex  w-90 mt-6 gap-10">
                <Sidebar dashboardAdmin={sidebar} />
                {children}
            </div>
        </div>
    );
};

export default Layout;
