import * as Yup from "yup";

export const validationSchemaMoneyTransfoerStep1 = Yup.object({
    Amount: Yup.string().required("فیلد اجبای است"),
    serial: Yup.string().required("فیلد اجبای است"),
});
export const validationSchemaMoneyTransfoerStep2 = Yup.object({
    password: Yup.string().required("فیلد اجبای است"),
});
