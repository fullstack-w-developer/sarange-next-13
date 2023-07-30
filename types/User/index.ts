
type NumberRate = { OneStar: number, TwoStar: number, ThreeStar: number, FourStar: number, FiveStar: number }

export type User = {
    AccountNumber: string;
    Balance: number;
    Car: string;
    City: string;
    CityNumber: string;
    FatherName: string;
    FirstName: string;
    LastName: string;
    phone: string;
    Sex: string;
    Shaba: string;
    State: string;
    Phone: string;
    userRole: "Driver" | "Customer";
    Rates:NumberRate;
    TotalNumberOfRate: number;
};

export type Transaction = {
    TransactionType: string;
    _id: string;
    Amount: number;
    Description: string;
    createdAt: string;
};

export type EditUser = {
    updatedField: {
        FirstName: string;
        LastName: string;
        Sex: string;
    };
};

export type TypeTransferMoney = {
    to: string;
    Amount: number;
    password: string;
};
