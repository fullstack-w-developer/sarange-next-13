import { deletePermisstionAction } from "@/server/admin/actions";
import usePermisstionStore from "@/stores/permisstion-store";
import { Dialog } from "@mui/material";
import React from "react";

const DeletePermisstion = () => {
    const { permisstion, setPermisstion } = usePermisstionStore()
    const deleteReferanceMutate = () => {
        deletePermisstionAction(permisstion.data._id).finally(() => {
            setPermisstion({});
        });
    };


    return (
        <Dialog maxWidth="xs" fullWidth open={permisstion.open === "delete"}>
            <div className="h-[280px]  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">حذف منبع </h1>
                <div className="p-2 pt-4">
                    <h1 className="font-artin-bold text-center text-xl text-[#222]">
                        آیا مطمعن هستید که میخواهید این صفت(attribute) را حذف کنید؟
                    </h1>
                    <p className="text-center font-artin-regular pt-6">{permisstion.data?.Name}</p>
                </div>
                <div className="flex items-center my-4 px-4 gap-10">
                    <button
                        onClick={() => setPermisstion({})}
                        className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                    >
                        انصراف
                    </button>
                    {/* @ts-ignore */}
                    <button
                        onClick={deleteReferanceMutate}
                        className="w-full bg-red-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                    >
                        {"حذف صفت(attribute)"}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default DeletePermisstion;
