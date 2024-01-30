import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import React from "react";
type Props = {
    children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
    return <div>
        <Header/>
        {children}
        <Footer/>
    </div>;
};

export default Layout;
