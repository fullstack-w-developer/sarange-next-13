"use client";
import DeleteComponent from "@/components/admin/permession/DeleteComponent";
import OperationModal from "@/components/admin/permession/OperationModal";
import DataGridTable from "@/components/common/GridTable";
import { generateValues } from "@/helper/utils/converObject";
import { addCounterAction, deleteCounterAction, editCounterAction } from "@/server/admin/counter";
import useAdminStore from "@/stores/admin-store";
import { User } from "@/types/User";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
interface Props {
    list: { data: any[]; Total: number; Headers: { Name: string }[]; operation: any };
}
const Drivers = ({ list }: Props) => {
    const { setModal, modal } = useAdminStore();
    const [page, setPage] = React.useState(1);
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
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
                        باجه جدید
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
            {modal.open === "حذف" && <DeleteComponent deleteFun={() => deleteCounterAction(modal.info._id)} title="باجه" />}
            {
                isOpenModal &&
                <OperationModal
                    validationSchema={{}}
                    title="باجه"
                    initialValues={
                        modal.name === "ویرایش" ? generateValues(list.operation.edit) : generateValues(list.operation.create)
                    }
                    items={modal.name === "ویرایش" ? list.operation.edit : list.operation.create}
                    craeteFun={addCounterAction}
                    editFun={editCounterAction}
                />
            }
        </div>
    );
};

export default Drivers;
