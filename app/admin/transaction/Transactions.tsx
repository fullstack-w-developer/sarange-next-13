"use client";

import DataGridTable from "@/components/common/GridTable";
import useAdminStore from "@/stores/admin-store";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
interface Props {
    list: { data: any[]; Total: number; Headers: { Name: string }[]; operation: any };
}
const Transactions = ({ list }: Props) => {
    const { toggle_opration_user, operationUser } = useAdminStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/transaction?q=${e.target.value}`);
    };

    return (
        <div className="flex-1 w-full mb-20">
            <div className="flex items-center mb-10 lg:w-1/2 bg-[#f7f7f7] border px-2 border-[#e1e1e1] rounded-lg py-2">
                <input
                    placeholder="جستجو..."
                    className="bg-transparent font-artin-regular outline-none w-full"
                    onChange={onChange}
                />
                <BiSearch size={20} />
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
            {/* {operationUser.open === "حذف" && <DeleteUserByAdmin />}
            {operationUser.open === "ویرایش" && <EditUser />} */}
        </div>
    );
};

export default Transactions;
