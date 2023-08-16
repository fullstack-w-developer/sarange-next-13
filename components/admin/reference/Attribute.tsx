import useReferanceStore from "@/stores/reference-store";
import { Dialog } from "@mui/material";
import React from "react";
import Input from "../Input";
import { addAttributeAction, editAttributeAction } from "@/server/admin/actions";
import { successToast } from "@/helper/utils/error";
interface Props {
    id: string;
}
const AttributeAction = ({ id }: Props) => {
    const { attribute, toggleAttribute } = useReferanceStore();
    const onAction = async (e: FormData) => {
        const attributeName = e.get("attributeName")?.toString();
        const value = e.get("value")?.toString();
        const header = e.get("header")?.toString();
        if (!attributeName || !value || !header) return;

        if (attribute.name === "edit") {
            const data = {
                attributeName,
                attributeValue: value,
                header,
            };
            editAttributeAction(attribute.info?._id, data).finally(() => {
                successToast("با موفقیت  ثبت شد");
            });
        } else {
            const data = {
                attributeName,
                value,
            };
            addAttributeAction(id, data).finally(() => {
                toggleAttribute({ open: undefined });
            });
        }
    };
    return (
        <Dialog maxWidth="xs" fullWidth open={attribute.open === "edit" || attribute.open === "add"}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">
                    صفت(Attribute) {attribute.name === "edit" ? "ویرایش" : "جدید"}
                </h1>
                <div className="p-2 px-4 pt-4">
                    <form action={onAction} className="flex flex-col gap-2">
                        <Input defaultValue={attribute.info?.Name ?? ""} name="attributeName" label={"نام"} />
                        <Input ltr defaultValue={attribute.info?.Value ?? ""} name="value" label={"مقدار(Value)"} />
                        <Input defaultValue={attribute.info?.TableHeader ?? ""} name="header" label={"عنوان در جدول"} />
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                type="button"
                                onClick={() => toggleAttribute({ open: undefined })}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {attribute.name === "edit" ? "ویرایش" : "ایجاد"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default AttributeAction;
