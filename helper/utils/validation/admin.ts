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


export const daynamicValidation = (initialValues: object) => {
    const validationSchema = Yup.object().shape(
        Object.keys(initialValues).reduce((schema, field) => {
            if (field === "Route") {
                // @ts-ignore
                schema[field] = Yup.object({
                    Name: Yup.string().required("فیلد اجباری است"),
                    _id: Yup.string().required("فیلد اجباری است"),
                })
            } else {
                // @ts-ignore
                schema[field] = Yup.string().required("فیلد اجباری است");
            }
            return schema;
        }, {})
    );

    return validationSchema;
}