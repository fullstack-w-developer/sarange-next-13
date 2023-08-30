import Loading from "@/components/common/Loading";
import { deleteAttributeAction } from "@/server/admin/actions";
import useReferanceStore from "@/stores/reference-store";
import { Dialog } from "@mui/material";
import React, { useTransition } from "react";

const DeleteAttribute = () => {
    const [isPending, startTransaction] = useTransition()
    const { attribute, toggleAttribute } = useReferanceStore();
    const deleteReferanceMutate = () => {
        startTransaction(async()=>{
            deleteAttributeAction(attribute.info._id).finally(() => {
                toggleAttribute({});
            });
        })
    };

    return (
        <Dialog maxWidth="xs" fullWidth open={attribute.open === "delete"}>
            <div className="h-[280px]  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">حذف منبع </h1>
                <div className="p-2 pt-4">
                    <h1 className="font-artin-bold text-center text-xl text-[#222]">
                        آیا مطمعن هستید که میخواهید این صفت(attribute) را حذف کنید؟
                    </h1>
                    <p className="text-center font-artin-regular pt-6">{attribute.info?.Name}</p>
                </div>
                <div className="flex items-center my-4 px-4 gap-10">
                    <button
                        onClick={() => toggleAttribute({})}
                        className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                    >
                        انصراف
                    </button>
                    {/* @ts-ignore */}
                    <button
                        onClick={deleteReferanceMutate}
                        className="w-full bg-red-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                    >
                        {isPending ?<Loading/> : "حذف صفت(attribute)"}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteAttribute;
