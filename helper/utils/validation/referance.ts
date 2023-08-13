import * as Yup from "yup";

export const validationSchemaNewReferance = Yup.object({
    name: Yup.string().required("فیلد اجباری است"),
});
