import * as Yup from "yup";

export const validationSchemaNewReferance = Yup.object({
    name: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaAddAttribute = Yup.object({
    value: Yup.string().required("فیلد اجباری است"),
    attributeName: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaPermession = Yup.object({
    value: Yup.string().required("فیلد اجباری است"),
    attributeName: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaRoutes = Yup.object({
    Name: Yup.string().required("فیلد اجباری است"),
    Cost: Yup.string().required("فیلد اجباری است"),
});

export const validationSchemaAttributeAction = Yup.object({
    attributeName: Yup.string().required("فیلد اجباری است"),
    value: Yup.string().required("فیلد اجباری است"),
});

