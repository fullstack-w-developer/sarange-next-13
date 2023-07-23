import Menu from "@/components/common/Menu";
import { menuUser } from "@/helper/utils/data";
import { getUser } from "@/server/user/actions";
import SectionUserPage from "./SectionUserPage";
import GlobalLayout from "@/components/common/GlobalLayout";
import Loadidng from "@/components/common/Loadidng";

const User = async () => {
    const user = await getUser();
    return (
        <GlobalLayout user={user}>
            <main>
                <SectionUserPage />
                <Menu menu={menuUser} />
            </main>
        </GlobalLayout>
    );
};

export default User;
