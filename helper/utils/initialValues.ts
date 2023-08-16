import { number, string } from "yup";

export const initialValuesSignUpUser = {
    password: "",
    repPassword: "",
    firstName: "",
    lastName: "",
    sex: "",
};

export const initialValuesGetOtp = {
    phone: "",
};

export const initialValuesCheckCode = {
    Code: "",
};

export const initialValueLogin = {
    phone: "",
    password: "",
};

export const initialValuesFare = {
    amount: "",
    numberOfPassenger: 1,
    password: "",
};
export const initialValuesSharge = {
    amount: "",
};

export const initialValuesPayWithCode = {
    code: "",
};

export const initialValuesEditProfile = {
    FirstName: "",
    LastName: "",
    Sex: "",
};
export const initialValuesMoneyTransfoer = {
    to: "",
    Amount: "",
    password: "",
    serial: "",
};
export const initialValuesMoneyTransfoerVerify = {
    password: "",
};
export const initialValuesRoutes = {
    Cost: "",
    Name:""
};
export const initialValuesPermession = {
    Role: {} as any,
    Action: {} as any,
    Resource: {} as any,
    Attributes: [],
};
