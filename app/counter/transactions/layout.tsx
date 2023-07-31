import Menu from "@/components/common/Menu";
import { counterList, menuUser } from "@/helper/utils/data";
import React from "react";
interface Props {
    children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <>
            {children}
            <Menu menu={counterList} />
        </>
    );
};

export default Layout;
