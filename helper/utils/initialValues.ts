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

export const initialValuesPayWithCode = {
    code: "",
};

export const initialValuesEditProfile = {
    FileName: "",
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
