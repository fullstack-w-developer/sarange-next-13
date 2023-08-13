import useReferanceStore from "@/stores/reference-store";
import { Dialog } from "@mui/material";
import React from "react";
import Input from "../Input";
import { addReferanceAction, editReferanceAction } from "@/server/admin/actions";

const NewReferance = () => {
    const { newReferance, toggleNewReferance } = useReferanceStore();
    const onAction = async (e: FormData) => {
        const name = e.get("name")?.toString();
        if (!name) return;

        if (newReferance.name === "edit") {
            const data = {
                Name: name,
            };
            editReferanceAction(newReferance.info._id, data).finally(() => {
                toggleNewReferance({});
            });
        } else {
            const data = {
                name: name,
            };
            addReferanceAction(data).finally(() => {
                toggleNewReferance({});
            });
        }
    };
    return (
        <Dialog maxWidth="xs" fullWidth open={newReferance.open}>
            <div className="h-fit  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">
                    منبع   {newReferance.name === "edit" ? "ویرایش" : "جدید"}
                </h1>
                <div className="p-2 px-4 pt-4">
                    <form action={onAction} className="flex flex-col gap-2">
                        <Input defaultValue={newReferance.info?.Name ?? ""} name="name" label={"منبع جدید"} />
                        <div className="flex items-center mt-7 my-4 px-4 gap-10">
                            <button
                                type="button"
                                onClick={() => toggleNewReferance({ open: false })}
                                className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                            >
                                انصراف
                            </button>
                            {/* @ts-ignore */}
                            <button
                                type="submit"
                                className="w-full bg-green-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                            >
                                {
                                    newReferance.name === "edit" ? "ویرایش" : "ایجاد"
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    );
};

export default NewReferance;
