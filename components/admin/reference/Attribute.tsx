import useReferanceStore from "@/stores/reference-store";
import { Dialog } from "@mui/material";
import React, { useTransition } from "react";
import { addAttributeAction, editAttributeAction } from "@/server/admin/actions";
import { successToast } from "@/helper/utils/error";
import { useFormik } from "formik";
import Input from "@/components/common/Input";
import { validationSchemaAttributeAction } from "@/helper/utils/validation/referance";
import Loading from "@/components/common/Loading";
interface Props {
    id: string;
}
const AttributeAction = ({ id }: Props) => {
    const [isPending, startTransaction] = useTransition()
    const { attribute, toggleAttribute } = useReferanceStore();
    const formik = useFormik({
        initialValues: {
            attributeName: "",
            value: ""
        },
        validationSchema: validationSchemaAttributeAction,
        onSubmit: (values) => {
            startTransaction(async () => {
            
                if (attribute.name === "edit") {
                    const data = {
                        attributeName: values.attributeName,
                        attributeValue: values.value,
                    };
                    await editAttributeAction(attribute.info?._id, data).finally(() => {
                        toggleAttribute({ open: undefined, info: {} });
                    });
                } else {
                    const data = {
                        attributeName: values.attributeName,
                        value: values.value,
                    };
                    await addAttributeAction(id, data).finally(() => {
                        toggleAttribute({ open: undefined, info: {} });
                    });
                }
            })
        }
    })

    return (
        <Dialog maxWidth="xs" fullWidth open={attribute.open === "edit" || attribute.open === "add"}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">
                    صفت(Attribute) {attribute.name === "edit" ? "ویرایش" : "جدید"}
                </h1>
                <div className="p-2 px-4 pt-4">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
                        <Input formik={formik} name="attributeName" label={"نام"} />
                        <Input formik={formik} name="value" label={"مقدار(Value)"} />
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                type="button"
                                onClick={() => toggleAttribute({ open: undefined, info: {} })}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {isPending ? <Loading /> : attribute.name === "edit" ? "ویرایش" : "ایجاد"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default AttributeAction;
