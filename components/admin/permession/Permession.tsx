"use client";
import Select from "@/components/common/Select";
import { initialValuesPermession } from "@/helper/utils/initialValues";
import useGetAllActionQuery from "@/hooks/query/permission/useGetAllActionQuery";
import useGetAllRecourseQuery from "@/hooks/query/permission/useGetAllRecourseQuery";
import useGetAllRolesQuery from "@/hooks/query/permission/useGetAllRolesQuery";
import useGetAttributeQuery from "@/hooks/query/permission/useGetAttributeQuery";
import { addPermessionAction, editPermessionAction } from "@/server/admin/actions";
import usePermisstionStore from "@/stores/permisstion-store";
import { Dialog } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";

const Permession = () => {
    const { permisstion, setPermisstion } = usePermisstionStore();
    const formik = useFormik({
        initialValues: initialValuesPermession,
        // validationSchema: validationSchemaPermession,
        onSubmit: (values) => {
            if (permisstion.name === "add") {
                const data = {
                    Permission: {
                        Role: values.Role._id,
                        Resource: values.Resource._id,
                        Action: values.Action._id,
                        Attributes: values.Attributes.map((obj: any) => obj._id),
                    },
                };
                addPermessionAction(data).finally(() => {
                    setPermisstion({});
                    formik.resetForm();
                });
            } else {
                const data = {
                    updatedValues: {
                        Role: values.Role._id,
                        Resource: values.Resource._id,
                        Action: values.Action._id,
                        Attributes: values.Attributes.map((obj: any) => obj._id),
                    },
                };

                editPermessionAction(permisstion.data._id, data).finally(() => {
                    setPermisstion({});
                    formik.resetForm();
                });
            }
        },
    });

    const { data: roles } = useGetAllRolesQuery();
    const { data: actions } = useGetAllActionQuery();
    const { data: recources } = useGetAllRecourseQuery();
    const { data: attributes, isLoading } = useGetAttributeQuery(formik.values.Resource._id);

    useEffect(() => {
        if (permisstion.name === "edit") {
            formik.setValues({
                ...permisstion.data,
            });
        }
    }, [permisstion.open]);

    return (
        <Dialog
            onClose={() => setPermisstion({})}
            maxWidth="xs"
            fullWidth
            open={permisstion.open === "edit" || permisstion.open === "add"}
        >
            <div className="py-7">
                <h1 className="text-center font-artin-black text-[#222] text-xl pt-3">
                    {" "}
                    {permisstion.name === "edit" ? "ویراش" : "ایجاد"} سطح دسترسی
                </h1>
                <form onSubmit={formik.handleSubmit} className="p-5 flex flex-col gap-3">
                    <Select
                        label="نقش"
                        getOptionValue={(option) => option._id}
                        getOptionLabel={(option) => option.Name}
                        formik={formik}
                        name="Role"
                        options={roles!}
                    />
                    <Select
                        label="Action"
                        getOptionValue={(option) => option._id}
                        getOptionLabel={(option) => option.Name}
                        formik={formik}
                        name="Action"
                        options={actions!}
                    />
                    <Select
                        label="Resource"
                        getOptionValue={(option) => option._id}
                        getOptionLabel={(option) => option.Name}
                        formik={formik}
                        name="Resource"
                        options={recources?.Resources!}
                    />
                    <Select
                        isDisabled={!formik.values.Resource._id}
                        isMulti
                        label="Attributes"
                        isLoading={isLoading}
                        getOptionValue={(option) => option._id}
                        getOptionLabel={(option) => option.Name}
                        formik={formik}
                        name="Attributes"
                        options={attributes?.Attributes}
                    />

                    <button className="bg-[#0096f5] py-2 text-white rounded-lg font-artin-regular mt-10">
                        {permisstion.name === "edit" ? "ویراش" : "ایجاد"}
                    </button>
                </form>
            </div>
        </Dialog>
    );
};

export default Permession;
