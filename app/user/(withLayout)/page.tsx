"use client"
import Menu from "@/components/common/Menu";
import { menuUser } from "@/helper/utils/data";
import dynamic from "next/dynamic";
const SectionUserPage = dynamic(()=> import("../SectionUserPage"),{ ssr:false})
const User = async () => {
    return (
        <div>
            <SectionUserPage   />
            <Menu menu={menuUser} />
        </div>
    );
};

export default User;
