import Input from "@/components/common/Input";
import Table from "@/components/common/Table";
import { StyledTableRow } from "@/helper/utils/mui";
import { validationSchemaCreateAction } from "@/helper/utils/validation/admin";
import useCreateActionMutation from "@/hooks/mutation/permission/useCreateActionMutation";
import useGetAllActionQuery from "@/hooks/query/permission/useGetAllActionQuery";
import usePermisstionStore from "@/stores/permisstion-store";
import { TableCell } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import Delete from "./Delete";
import Edit from "./Edit";

const CreateAction = () => {
    const { setModal, modal } = usePermisstionStore();
    const { data } = useGetAllActionQuery();
    const { mutate, isLoading } = useCreateActionMutation();

    const formik = useFormik({
        initialValues: {
            Name: "",
        },
        validationSchema: validationSchemaCreateAction,
        onSubmit: async (values) => {
            const data = {
                Action: {
                    Name: values.Name,
                },
            };
            mutate(data);
            formik.resetForm();
        },
    });
    return (
        <div className="flex justify-center gap-10 items-center w-full">
            <form onSubmit={formik.handleSubmit} className="min-w-[400px] mt-14">
                <Input name="Name" label="نام عملیات" classInput="!h-[44px]" formik={formik} />
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
                                    onClick={() => setModal({ open: "حذف", data: item, name: "action" })}
                                    className="bg-red-500 font-artin-regular text-white py-1 rounded-lg px-4"
                                >
                                    حذف
                                </button>
                                <button
                                    onClick={() => setModal({ open: "ویرایش", data: item, name: "action" })}
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

export default CreateAction;
