import * as Yup from "yup";
export const validationSchemaSignUp = Yup.object({
    firstName: Yup.string().required("فیلد اجباری است"),
    lastName: Yup.string().required("فیلد اجباری است"),
    sex: Yup.string().required("فیلد اجباری است"),
    password: Yup.string().required("فیلد اجباری است"),
    repPassword: Yup.string()
        .required("فیلد اجباری است")
        .oneOf([Yup.ref("password"), "null"], "تکرار رمز عبور با رمز عبور یکسان نیست"),
});

export const validationSchemaGetOtp = Yup.object({
    phone: Yup.string().required("فیلد اجباری است"),
});

export const validationSchemaForgetPass = Yup.object({
    phone: Yup.string().required("فیلد اجباری است"),
});

export const validationSchemaCheckCode = Yup.object({
    Code: Yup.string().required("فیلد اجباری است"),
});


export const validationSchemaAmount = Yup.object({
    amount: Yup.string().min(4).required("مبلغ نمی تواند کمتر از ریال باشد ۱۰۰۰").max(1000000).required("پرداخت نمی تواند بیش از ۱۰۰ هزار ریال باشد").required("فیلد اجباری است"),
});