import useReferanceStore from "@/stores/reference-store";
import { Dialog } from "@mui/material";
import React, { useEffect, useTransition } from "react";
import { addReferanceAction, editReferanceAction } from "@/server/admin/actions";
import { useFormik } from "formik";
import Input from "@/components/common/Input";
import Loading from "@/components/common/Loading";
import { validationSchemaNewReferance } from "@/helper/utils/validation/referance";

const NewReferance = () => {
    const [isPnding, setStartTransaction] = useTransition()
    const { newReferance, toggleNewReferance } = useReferanceStore();
    const formik = useFormik({
        initialValues: {
            name: "",

        },
        validationSchema: validationSchemaNewReferance,
        onSubmit: (values) => {
            setStartTransaction(async () => {
                if (newReferance.name === "edit") {
                    const data = {
                        Name: values.name,
                    };
                    await editReferanceAction(newReferance.info._id, data).finally(() => {
                        toggleNewReferance({});
                    });
                } else {
                    const data = {
                        name: values.name,
                    };
                    await addReferanceAction(data).finally(() => {
                        toggleNewReferance({});
                    });
                }
            })
        }
    })

    useEffect(() => {
        if (newReferance.name === "edit") {
            formik.setValues({
                ...newReferance.info
            })
        }
    }, [])

    return (
        <Dialog maxWidth="xs" fullWidth open={newReferance.open}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">
                    منبع {newReferance.name === "edit" ? "ویرایش" : "جدید"}
                </h1>
                <div className="p-2 px-4 pt-4">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                        <Input formik={formik} name="name" label={"منبع جدید"} />
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                type="button"
                                onClick={() => toggleNewReferance({ open: false , info:{},})}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {isPnding ? <Loading /> : newReferance.name === "edit" ? "ویرایش" : "ایجاد"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default NewReferance;
