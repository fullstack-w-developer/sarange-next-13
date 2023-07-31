import * as Yup from "yup";

export const variantSchemaFare = Yup.object({
    password: Yup.string().required("لطفا رمز عبور خود را وارد کنید"),
});
