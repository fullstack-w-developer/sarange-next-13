import { Dialog } from "@mui/material";
import React, { useEffect } from "react";
import usePermisstionStore from "@/stores/permisstion-store";
import { useFormik } from "formik";
import Input from "@/components/common/Input";
import useEditRoleMutation from "@/hooks/mutation/permission/useEditRoleMutation";
import useEditActionMutation from "@/hooks/mutation/permission/useEditActionMutation";
import Loading from "@/components/common/Loading";

const Edit = () => {
    const { mutate: mutateAction, isLoading: loadingAction } = useEditActionMutation();
    const { mutate, isLoading } = useEditRoleMutation();
    const { modal, setModal } = usePermisstionStore();

    const formik = useFormik({
        initialValues: {
            [modal.name]: "",
        },
        onSubmit: (values) => {
            const data = {
                name: values[modal.name],
                id: modal.data._id,
            };
            if (modal.name === "role") {
                mutate(data);
            } else {
                mutateAction(data);
            }
        },
    });

    useEffect(() => {
        if (modal.data.Name) {
            formik.setFieldValue(modal.name, modal.data.Name);
        }
    }, []);

    return (
        <Dialog maxWidth="xs" fullWidth open={modal.open === "ویرایش"}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">ویرایش </h1>
                <div className="p-2 px-4 pt-4">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                        <Input name={modal.name} formik={formik} label={modal.name === "role" ? "نقش" : "عملیات"} />
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                onClick={() => setModal({})}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {isLoading || loadingAction ? <Loading /> : "ویرایش"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default Edit;
