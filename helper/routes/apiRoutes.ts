const apiRoutes = {
    auth: {
        signup: "/users/Signup",
        getCodeSignup: "/auth/newUser/VerificationCode",
        login: "/auth",
        checkCodeSignup: "/auth/VerificationCode",
        checkCodeLogin: "/auth/login/VerificationCode",
        forgetPass: "/auth/resetPassword",
        me: "/user",
        edit_user: "/user",
    },
    driver: {
        getDriverByCityNumber: "/driver",
        me: "/driver",
        get_userInfo_by_phone: "/drivers/users",
        user_userInfo_by_cardId: "/drivers/users/cards",
        trip: "/trips/driver",
    },
    fare: "/fares",
    user: {
        trip: "/trips/user",
        my_transactions: "/user/transactions",
        me:"/user",
        rate:"/driver",
        my_cards:"/Cards/myCards?skip=0&limit=10",
        deActiveCard:"/Cards/myCards",
        getDetilsByCard:"/cards",
        transferMoney:"/Cards/TransferMoney"
    },
};

export default apiRoutes;
