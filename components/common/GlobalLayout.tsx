"use client"
import { User } from '@/types/User'
import React from 'react'
interface Props {
    user: User
    children: React.ReactNode
}
const GlobalLayout = ({ user, children }: Props) => {
    return (
        <>
            {/* <ProfileInfo user={user}/> */}
            {children}
        </>
    )
}

export default GlobalLayout