import * as Yup from "yup";

export const validationSchemaCreateRole = Yup.object({
    role: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaCreateAction = Yup.object({
    Name: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaAssignRole = Yup.object({
    user: Yup.object({
        _id: Yup.string().required("فیلد اجباری است"),
    }),
    role: Yup.object({
        _id: Yup.string().required("فیلد اجباری است"),
    }),
});
