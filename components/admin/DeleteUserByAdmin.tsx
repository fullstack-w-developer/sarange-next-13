import {  deleteUserByAdmin } from "@/server/admin/actions";
import { deleteDriverByAdmin } from "@/server/admin/driver";
import useAdminStore from "@/stores/admin-store";
import { Dialog } from "@mui/material";
import React from "react";

const DeleteUserByAdmin = () => {
    const { operationUser, toggle_opration_user } = useAdminStore();
    const deleteUser = () => {
        if (operationUser.fun === "deleteUserByAdmin") {
            // @ts-ignore
            deleteUserByAdmin(operationUser.info.AuthId!).finally(() => {
                toggle_opration_user({});
            });
        } else {
            // @ts-ignore
            deleteDriverByAdmin(operationUser.info.AuthId!).finally(() => {
                toggle_opration_user({});
            });
        }
    };

    return (
        <Dialog maxWidth="xs" fullWidth open={operationUser.open === "حذف"}>
            <div className="h-[280px]  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">حذف کاربر</h1>
                <div className="p-2 pt-4">
                    <h1 className="font-artin-bold text-center text-xl text-[#222]">
                        آیا مطمعن هستید که میخواهید این کاربر را حذف کنید؟
                    </h1>
                    <p className="text-center font-artin-regular pt-6">
                        {operationUser.info?.FirstName} {operationUser.info?.LastName}
                    </p>
                </div>
                <div className="flex items-center my-4 px-4 gap-10">
                    <button
                        onClick={() => toggle_opration_user({})}
                        className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                    >
                        انصراف
                    </button>
                    {/* @ts-ignore */}
                    <button
                        onClick={deleteUser}
                        className="w-full bg-red-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                    >
                        حذف کاربر
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteUserByAdmin;
