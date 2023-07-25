import { getUserInfoByPhone, getUserInfoBySerialCard } from '@/server/driver/action';
import React from 'react'
import UserInfo from './UserInfo';
import { notFound } from 'next/navigation';
interface Props {
    searchParams?: { serial?: string, phone: string, type:string };
}
const Inquiry = async ({ searchParams }: Props) => {
    const userInfo = searchParams?.phone ? await getUserInfoByPhone(searchParams.phone) : await getUserInfoBySerialCard(searchParams?.serial!)
    if (!userInfo?.CarRoute?.Name) return notFound();
    return <UserInfo cardId={searchParams?.serial} paymentType={searchParams?.type} userInfo={userInfo} />
}

export default Inquiry