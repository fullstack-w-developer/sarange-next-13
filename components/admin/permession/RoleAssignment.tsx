import Select from "@/components/common/Select";
import { validationSchemaAssignRole } from "@/helper/utils/validation/admin";
import useAssignmentUserMutation from "@/hooks/mutation/permission/useAssignmentUserMutation";
import useGetAllRolesQuery from "@/hooks/query/permission/useGetAllRolesQuery";
import useGetAllUserQuery from "@/hooks/query/permission/useGetAllUserQuery";
import { useFormik } from "formik";
import React from "react";

const RoleAssignment = () => {
    const { data: roles, isLoading: loadRoles } = useGetAllRolesQuery();
    const { data: users, isLoading: loadUser } = useGetAllUserQuery();
    const { mutate, isLoading } = useAssignmentUserMutation();

    const formik = useFormik<any>({
        initialValues: {
            role: "",
        },
        validationSchema: validationSchemaAssignRole,
        onSubmit: async (values) => {
            const data = {
                user: values.user._id,
                role: values.role._id,
            };
            mutate(data);
        },
    });
    return (
        <div className="flex justify-center items-center w-full">
            <form onSubmit={formik.handleSubmit} className="min-w-[400px] mt-14 flex flex-col gap-3">
                <Select
                    isLoading={loadRoles}
                    label="انتخاب نقش"
                    getOptionValue={(option) => option._id}
                    getOptionLabel={(option) => `${option.Name}`}
                    options={roles!}
                    formik={formik}
                    name="role"
                />
                <Select
                    isLoading={loadUser}
                    label="انتخاب کاربر"
                    getOptionValue={(option) => option._id}
                    getOptionLabel={(option) => `${option.FirstName} ${option.LastName}`}
                    options={users?.Users!}
                    formik={formik}
                    name="user"
                />
                <button className="w-full bg-blue-500 rounded-lg text-white h-[44px] mt-10">
                    {isLoading ? "در حال انتصاب" : "انتصاب"}
                </button>
            </form>
        </div>
    );
};

export default RoleAssignment;
