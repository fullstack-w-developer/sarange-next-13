"use client";
import DeleteComponent from "@/components/admin/permession/DeleteComponent";
import OperationModal from "@/components/admin/permession/OperationModal";
import DataGridTable from "@/components/common/GridTable";
import { generateValues } from "@/helper/utils/converObject";
import { addDriverByAdmin, deleteDriverByAdmin, editDriverByAdmin } from "@/server/admin/driver";
import useAdminStore from "@/stores/admin-store";
import { User } from "@/types/User";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import OperationDriver from "./OperationDriver";
interface Props {
    list: { data: User[]; Total: number; Headers: { Name: string }[]; operation: any };
}
const Drivers = ({ list }: Props) => {
    const { modal, setModal } = useAdminStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin?q=${e.target.value}`);
    };
    const isOpenModal = modal.name === "ویرایش" || modal.name === "ایجاد"
    return (
        <div className="flex-1 w-full mb-20">
            <div className="flex items-center justify-between my-10">
                <div className="flex items-center  lg:w-1/2 bg-[#f7f7f7] border px-2 border-[#e1e1e1] rounded-lg py-2">
                    <input
                        placeholder="جستجو..."
                        className="bg-transparent font-artin-regular outline-none w-full"
                        onChange={onChange}
                    />
                    <BiSearch size={20} />
                </div>
                {list.operation.names.find((item: any) => item === "ایجاد") && (
                    <button
                        onClick={() => setModal({ open: "ایجاد", name: "ایجاد" })}
                        className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg"
                    >
                        راننده جدید
                    </button>
                )}
            </div>
            <DataGridTable operation={list.operation} rows={list.data} columns={list.Headers} />
            <Pagination
                onChange={handleChange}
                color="primary"
                className="flex justify-center items-center mt-10"
                count={Math.ceil(list.Total / 10)}
                variant="outlined"
                shape="rounded"
            />
            {modal.open === "حذف" && <DeleteComponent name={`${modal.info.FirstName} ${modal.info.LastName}`} deleteFun={() => deleteDriverByAdmin(modal.info.AuthId)} title="راننده" />}
            {
                isOpenModal &&
                <OperationDriver
                    validationSchema={{}}
                    title="راننده"
                    initialValues={
                        // @ts-ignore
                        modal.name === "ویرایش" ? generateValues(list.operation.edit) : generateValues(list.operation.create)
                    }
                    // @ts-ignore
                    items={modal.name === "ویرایش" ? list.operation.edit : list.operation.create}
                    craeteFun={addDriverByAdmin}
                    editFun={editDriverByAdmin}
                />
            }
        </div>
    );
};

export default Drivers;
