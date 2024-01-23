import Menu from "@/components/common/Menu";
import { menuUser } from "@/helper/utils/data";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <>
            {children}
            <Menu menu={menuUser} />
        </>
    );
};

export default Layout;
