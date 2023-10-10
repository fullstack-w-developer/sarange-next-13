import { Dialog, Switch } from "@mui/material";
import React, { useState, useEffect, useTransition } from "react";
import { errorToast, successToast } from "@/helper/utils/error";
import Input from "@/components/common/Input";
import { useFormik } from "formik";
import Select from "@/components/common/Select";
import useAdminStore from "@/stores/admin-store";
import { convertObjectEnglishNumber } from "@/helper/utils/converObject";
import Loading from "@/components/common/Loading";
interface Props {
    items: {
        Name: string;
        Value: string;
        type: string;
    }[];
    initialValues: any;
    validationSchema: any;
    title: string;
    craeteFun: (data: any) => void;
    editFun: (id: string, data: any) => void;
}
const OperationModal = ({ items, initialValues, title, validationSchema, craeteFun, editFun }: Props) => {
    const [isPending, startTransition] = useTransition();
    const { modal, setModal } = useAdminStore();
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            startTransition(async () => {
                if (values?._id) {
                    delete values?._id;
                    delete values?.AuthId;
                }
                if (Object.hasOwn(values, "Status")) {
                    values.Status = values?.Status;
                }
                if (modal.name === "ویرایش") {
                    // @ts-ignore
                  const response:any =  await editFun(modal.info.AuthId ? modal.info.AuthId : modal.info._id, values)
                  if (response.status) {
                    successToast("کاربر با موفقیت حذف شد")
                    setModal({})
                } else {
                    errorToast(response.message)
                }
                } else {
                    console.log(values);
                    // @ts-ignore
                    await craeteFun(values).finally(() => {
                        setModal({});
                        successToast("با موفقیت ایجاد شد");
                        formik.resetForm();
                    });
                }
            });
        },
    });

    useEffect(() => {
        if (modal.info) {
            formik.setValues({
                ...modal.info,
            });
        }
    }, [modal.info]);
    return (
        <Dialog maxWidth="xs" fullWidth open={modal.open === "ویرایش" || modal.open === "ایجاد"}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl  text-[#222] border-[#e1e1e1] border-b py-3">
                    {` ${modal.name === "ایجاد" ? title : ""} ${modal.name === "ویرایش" ? "ویرایش" : "جدید"} ${
                        modal.name === "ویرایش" ? title : ""
                    }`}
                </h1>
                <div className="p-2 px-4 pt-4">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                        {items?.map((item, idx) => {
                            if (item.type === "select") {
                                return <Select key={idx} formik={formik} name={item.Name} label={item.Value} options={[]} />;
                            }
                            if (item.Value === "Status") {
                                return (
                                    <div key={idx} className="flex items-center gap-7">
                                        <p className="font-artin-regular lg:text-[12px] block mb-1 pr-1 text-[#2F2F2F]">
                                            وضعیت :
                                        </p>
                                        <Switch
                                            checked={formik.values[item.Value]}
                                            onChange={formik.handleChange}
                                            name={item.Value}
                                            color="warning"
                                        />
                                    </div>
                                );
                            }

                            return <Input type={item.Value === "Password" ? "password" :"text"} key={idx} formik={formik} label={item.Name} name={item.Value} />;
                        })}
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                type="button"
                                onClick={() => setModal({ open: undefined })}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {isPending ? <Loading /> : modal.name === "ویرایش" ? "ویرایش" : "ایجاد"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default OperationModal;
