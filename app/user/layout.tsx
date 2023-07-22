import Menu from "@/components/common/Menu"
import ProfileInfo from "@/components/common/ProfileInfo"
import { mainUrl } from "@/helper/constants/env-variables"
import { menuUser } from "@/helper/utils/data"
import { cookies } from "next/headers"

const getUser = async () => {
    const cookieStore = cookies()
    const token = cookieStore.get('token')?.value
    if (token) {
        const data: any = await fetch(`${mainUrl}/user`, {
            headers: {
                "x-Access-Token": token!,
            }
        })
        const user = await data.json()
        return user
    }
}



export default async function Layout({ children }: { children: React.ReactNode }) {
    const user = await getUser()
    return (
        <>
            <ProfileInfo user={user} />
            {children}
            <Menu menu={menuUser}/>
        </>
    );
}

