import * as Yup from "yup";

export const variantSchemaShargeAmount = Yup.object({
    amount: Yup.string().required("فیلد اجباری است"),
});
export const variantSchemaGetCode = Yup.object({
    phone: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaInformationCardissuance = Yup.object({
    firstName: Yup.string().required("فیلد اجباری است"),
    lastName: Yup.string().required("فیلد اجباری است"),
    sex: Yup.string().required("فیلد اجباری است"),
    cardPassword: Yup.string().required("فیلد اجباری است"),
    repCardPassword: Yup.string()
        .required("فیلد اجباری است")
        .oneOf([Yup.ref("cardPassword"), "null"], "تکرار رمز عبور با رمز عبور یکسان نیست"),
});
export const validationSchemaInformationCardissuancePass = Yup.object({
    cardPassword: Yup.string().required("فیلد اجباری است"),
    repCardPassword: Yup.string()
        .required("فیلد اجباری است")
        .oneOf([Yup.ref("cardPassword"), "null"], "تکرار رمز عبور با رمز عبور یکسان نیست"),
});
