import * as Yup from "yup";

export const validationSchemaCheckout = Yup.object({
    amount: Yup.string().required("فیلد اجباری است"),
});
