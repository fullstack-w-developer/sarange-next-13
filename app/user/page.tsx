import Menu from "@/components/common/Menu";
import { menuUser } from "@/helper/utils/data";
import { getUser } from "@/server/user/actions";
import SectionUserPage from "./SectionUserPage";

const User = async () => {
    const user = await getUser();
    return (
        <main>
            <SectionUserPage />
            <Menu menu={menuUser} />
        </main>
    );
};

export default User;
