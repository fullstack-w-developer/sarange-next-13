import { getUser } from '@/server/user/actions';
import React from 'react'
import Edit from './Edit';

const Page = async () => {
    const user = await getUser();
  return <Edit user={user}/>
}

export default Page