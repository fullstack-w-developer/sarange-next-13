import useAdminStore from "@/stores/admin-store";
import { Dialog } from "@mui/material";
import React from "react";
import Input from "./Input";
import Select from "./Select";
import { sexPerson } from "@/helper/utils/data";
import { actionEditUserByAdmin } from "@/server/admin/actions";

const EditUser = () => {
    const { operationUser, toggle_opration_user } = useAdminStore();
    const componentMap = {
        FirstName: { label: "نام", name: "FirstName", type: "text" },
        LastName: { label: "خانوادگی", name: "LastName", type: "text" },
        Sex: { label: "جنسیت", name: "Sex", type: "radio" },
    };

    const editUserByAdmin = async (e: FormData) => {
        const FirstName = e.get("FirstName")?.toString();
        const LatName = e.get("LastName")?.toString();
        if (!FirstName || !LatName) return;

        const data = {
            updatedField: {
                FirstName,
                LatName,
            },
        };

        await actionEditUserByAdmin(operationUser.info?._id!, data)
            .then(() => {
                toggle_opration_user({});
            })
            .catch(() => {
                toggle_opration_user({});
            });
    };

    return (
        <Dialog maxWidth="xs" fullWidth open={operationUser.open === "ویرایش"}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">ویرایش کاربر</h1>
                <div className="p-2 px-4 pt-4">
                    <form action={editUserByAdmin} className="flex flex-col gap-2">
                        {operationUser.operation.Attributes.map((attr: any) => {
                            // @ts-ignore
                            const componentConfig = componentMap[attr.Value];
                            return componentConfig ? (
                                componentConfig.type === "text" ? (
                                    <Input
                                        // @ts-ignore
                                        defaultValue={operationUser?.info[attr.Value]}
                                        key={attr._id}
                                        label={componentConfig.label}
                                        name={componentConfig.name}
                                    />
                                ) : (
                                    <Select name={componentConfig.name} list={sexPerson} />
                                )
                            ) : null;
                        })}
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                onClick={() => toggle_opration_user({})}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                ویرایش کاربر
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default EditUser;
