"use client";
import React, { useTransition } from "react";
import { Dialog } from "@mui/material";
import Button from "@/components/common/Button";
import { changeStatusWithdrawByAdmin } from "@/server/admin/withdrawals";
import { errorToast, successToast } from "@/helper/utils/error";
import Loading from "@/components/common/Loading";
interface Props {
    modal: {
        open: boolean;
        info: any;
        name: string;
    };
    setModal: React.Dispatch<React.SetStateAction<any>>;
}

const ChangeStatusWithdraw = ({ modal, setModal }: Props) => {
    const [isPending, startTransition] = useTransition();
    const onClick = () => {
        startTransition(async () => {
           const response = await changeStatusWithdrawByAdmin({ status: modal.name, id: modal.info._id })
           if(response.status){
            successToast("با موفقیت تغیر وضغیت  شد")
            setModal({open:false,name:"",info:{}})
           }else{
                errorToast(response.message)
           }
                
        });
    };

    
    return (
        <Dialog fullWidth open={modal.open}>
            <div className="p-4">
                <h1 className="font-artin-bold border-b border-neutral-200 pb-3 text-center text-2xl">تغیر وضعیت تسویه</h1>
                <div>
                    <p className="mx-auto text-center leading-10 font-artin-regular text-lg py-10 w-[400px] ">
                        آیا مطمعن هستید که میخواهید وضعیت تسویه{" "}
                        <span className="font-artin-black">
                            {modal.info.Driver.FirstName} {modal.info.Driver.LastName}
                        </span>{" "}
                        را به <span className="font-artin-black">{modal.name}</span> تغیر دهید.
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setModal({ open: false, info: {} })}
                        className="border border-neutral-200 w-[200px] rounded-lg text-[#626262] font-artin-regular whitespace-nowrap h-12"
                    >
                        منصرف شدم
                    </button>
                    <button
                        onClick={onClick}
                        className="border border-neutral-200 bg-indigo-900 w-[200px] rounded-lg text-white font-artin-regular whitespace-nowrap h-12"
                    >
                        {isPending ? <Loading /> : "تفیر وضعیت"}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default ChangeStatusWithdraw;
