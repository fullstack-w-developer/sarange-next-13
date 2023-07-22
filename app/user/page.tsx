import Menu from '@/components/common/Menu';
import ProfileInfo from '@/components/common/ProfileInfo';
import { menuUser } from '@/helper/utils/data';
import { getUser } from '@/server/actions';
import SectionUserPage from './SectionUserPage';



const User = async () => {
    const user = await getUser()
    return <main>
        <ProfileInfo user={user} />
        <SectionUserPage />
        <Menu menu={menuUser} />
    </main>;
};



export default User;
