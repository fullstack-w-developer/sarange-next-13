import Menu from "@/components/common/Menu";
import { menuUser } from "@/helper/utils/data";
import dynamic from "next/dynamic";
const SectionUserPage = dynamic(()=> import("./SectionUserPage"),{ ssr:false})
const User = async () => {
    return (
        <main>
            <SectionUserPage   />
            <Menu menu={menuUser} />
        </main>
    );
};

export default User;
