import useDeleteReferanceMutation from "@/hooks/mutation/referance/useDeleteReferanceMutation";
import { deleteReferanceAction } from "@/server/admin/actions";
import useReferanceStore from "@/stores/reference-store";
import { Dialog } from "@mui/material";
import React from "react";

const DeleteReferance = () => {
    // const { mutate, isLoading } = useDeleteReferanceMutation()
    const { deleteReferance, toggleDeleteReferance } = useReferanceStore();
    const deleteReferanceMutate = () => {
        deleteReferanceAction(deleteReferance.info._id).finally(() => {
            toggleDeleteReferance({});
        });
    };

    return (
        <Dialog maxWidth="xs" fullWidth open={deleteReferance.open}>
            <div className="h-[280px]  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">حذف منبع </h1>
                <div className="p-2 pt-4">
                    <h1 className="font-artin-bold text-center text-xl text-[#222]">
                        آیا مطمعن هستید که میخواهید این منبع را حذف کنید؟
                    </h1>
                    <p className="text-center font-artin-regular pt-6">{deleteReferance.info?.Name}</p>
                </div>
                <div className="flex items-center my-4 px-4 gap-10">
                    <button
                        onClick={() => toggleDeleteReferance({})}
                        className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                    >
                        انصراف
                    </button>
                    {/* @ts-ignore */}
                    <button
                        onClick={deleteReferanceMutate}
                        className="w-full bg-red-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                    >
                        {"حذف منبع"}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteReferance;
