import Loading from "@/components/common/Loading";
import { errorToast, successToast } from "@/helper/utils/error";
import useAdminStore from "@/stores/admin-store";
import { Dialog } from "@mui/material";
import { useTransition } from "react";
interface Props {
    title: string;
    deleteFun: () => void;
    name?: string;
}
const DeleteComponent = ({ title, deleteFun, name }: Props) => {
    const [isPending, startTransition] = useTransition();

    const { modal, setModal } = useAdminStore();
    const onDelete = async () => {
        startTransition(async () => {
            await deleteFun()
            // @ts-ignore
                .then(() => successToast("با موفقیت حذف شد"))
                .catch(() => {
                    errorToast("با موفقیت حذف شد");
                })
                .finally(() => {
                    setModal({info:{}});
                });
        });
    };
    return (
        <Dialog maxWidth="xs" fullWidth open={modal.open === "حذف"}>
            <div className="h-[280px]  !flex !flex-col !justify-between">
                <h1 className="text-center font-artin-black text-xl text-[#222] border-[#e1e1e1] border-b py-3">حذف {title} </h1>
                <div className="p-2 pt-4">
                    <h1 className="font-artin-bold text-center text-xl text-[#222]">
                        آیا مطمعن هستید که میخواهید این {title} را حذف کنید؟
                    </h1>
                    <p className="text-center font-artin-bold pt-5 text-[#9e9e9e]">{name ? name : modal.info?.Name}</p>
                </div>
                <div className="flex items-center my-4 px-4 gap-10">
                    <button
                        onClick={() => setModal({})}
                        className="w-full border border-[#e1e1e1] py-[10px] rounded-lg font-artin-regular"
                    >
                        انصراف
                    </button>
                    <button
                        onClick={onDelete}
                        className="w-full bg-red-500 text-white border border-[#e1e1e1] py-[10px] rounded-lg font-artin-bold"
                    >
                        {isPending ? <Loading /> : "حذف"}
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default DeleteComponent;
