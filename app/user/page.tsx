import { headers } from 'next/headers'
import React from "react";



const User = async () => {
    const headersList = headers()
    return <div>User</div>;
};



export default User;
