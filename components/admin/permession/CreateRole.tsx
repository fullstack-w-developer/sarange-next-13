import Input from "@/components/common/Input";
import Table from "@/components/common/Table";
import { StyledTableRow } from "@/helper/utils/mui";
import { validationSchemaCreateRole } from "@/helper/utils/validation/admin";
import useCreateRoleMutation from "@/hooks/mutation/permission/useCreateRoleMutation";
import useGetAllRolesQuery from "@/hooks/query/permission/useGetAllRolesQuery";
import usePermisstionStore from "@/stores/permisstion-store";
import { TableCell } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const CreateRole = () => {
    const { setModal, modal } = usePermisstionStore();

    const { data } = useGetAllRolesQuery();
    const { mutate, isLoading, isSuccess } = useCreateRoleMutation();

    const formik = useFormik({
        initialValues: {
            role: "",
        },
        validationSchema: validationSchemaCreateRole,
        onSubmit: async (values) => {
            const data = {
                Role: {
                    Name: values.role,
                },
            };
            mutate(data);
            formik.resetForm();
        },
    });
    return (
        <div className="flex justify-center gap-14 items-center w-full">
            <form onSubmit={formik.handleSubmit} className="min-w-[400px] mt-14">
                <Input name="role" label="نقش" classInput="!h-[44px]" formik={formik} />
                <button className="w-full bg-blue-500 rounded-lg text-white h-[44px] mt-10">
                    {isLoading ? "در حال ایجاد" : "ایجاد"}
                </button>
            </form>
            <Table header={[{ Name: "نام نقش" }, { Name: "عملیات" }]}>
                {data?.map((item) => (
                    <StyledTableRow key={item._id}>
                        <TableCell align="center">
                            <span className="font-artin-regular">{item.Name}</span>
                        </TableCell>
                        <TableCell width={"200px"} align="center">
                            <div className="flex justify-center items-center gap-5 !max-w-[200px]">
                                <button
                                    onClick={() => setModal({ open: "حذف", data: item, name: "role" })}
                                    className="bg-red-500 font-artin-regular text-white py-1 rounded-lg px-4"
                                >
                                    حذف
                                </button>
                                <button
                                    onClick={() => setModal({ open: "ویرایش", data: item, name: "role" })}
                                    className="bg-green-500 font-artin-regular text-white py-1 rounded-lg px-4"
                                >
                                    ویرایش
                                </button>
                            </div>
                        </TableCell>
                    </StyledTableRow>
                ))}
            </Table>
            <Delete />
            {modal.open === "ویرایش" && <Edit />}
        </div>
    );
};

export default CreateRole;
