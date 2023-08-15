import React from 'react'
import Create from './Create'
import { getAllPermissions } from '@/server/admin/actions'
interface Props {
    searchParams?: {
        q?: string;
        skip?: string;
    };
}
const Page = async ({searchParams}:Props) => {
    const permession:{Permissions:any[],Total:number} = await getAllPermissions(searchParams?.q,searchParams?.skip);
  return <Create permession={permession}/>
}

export default Page