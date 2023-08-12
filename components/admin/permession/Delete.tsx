import useDeleteActionMutation from "@/hooks/mutation/permission/useDeleteActionMutation";
import useDeleteRoleMutation from "@/hooks/mutation/permission/useDeleteRoleMutation";
import usePermisstionStore from "@/stores/permisstion-store";
import { Dialog } from "@mui/material";
import React from "react";

const Delete = () => {
    const { mutate: mutateAction, isLoading: loadingAction } = useDeleteActionMutation();
    const { mutate, isLoading } = useDeleteRoleMutation();
    const { modal, setModal } = usePermisstionStore();
    const deleteFun = () => {
        if (modal.name === "role") {
            mutate(modal.data._id);
        } else {
            mutateAction(modal.data._id);
        }
    };

    return (
        <Dialog maxWidth="xs" fullWidth open={modal.open === "حذف"}>
            <div className="h-[280px]  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">حذف نقش</h1>
                <div className="p-2 pt-4">
                    <h1 className="font-artin-bold text-center text-xl text-[#222]">
                        آیا مطمعن هستید که میخواهید این نقش را حذف کنید؟
                    </h1>
                    <p className="text-center font-artin-regular pt-6">{modal.data?.Name}</p>
                </div>
                <div className="flex items-center my-4 px-4 gap-10">
                    <button
                        onClick={() => setModal({})}
                        className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                    >
                        انصراف
                    </button>
                    {/* @ts-ignore */}
                    <button
                        onClick={deleteFun}
                        className="w-full bg-red-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                    >
                        {isLoading || loadingAction ? "در حال حذف" : "  حذف "}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default Delete;
