"use client";
import DeleteComponent from "@/components/admin/permession/DeleteComponent";
import OperationModal from "@/components/admin/permession/OperationModal";
import DataGridTable from "@/components/common/GridTable";
import Table from "@/components/common/Table";
import { Delete_icon, EditIcon } from "@/components/icons/icons";
import { columnsUsers } from "@/helper/utils/data";
import { generateObjectInitailValue } from "@/helper/utils/generateObjectInitalValue";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import { convertDate, spratorNumber, toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import { deleteUserByAdmin, editUserByAdmin } from "@/server/admin/user";
import useAdminStore from "@/stores/admin-store";
import { ListType } from "@/types/common";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
interface Props {
    list: ListType;
}
const Users = ({ list }: Props) => {
    const { modal } = useAdminStore()
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin/user?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/user?q=${e.target.value}`);
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
            {modal.open === "حذف" && <DeleteComponent
                name={`${modal.info.FirstName} 
                ${modal.info.LastName}`}
                deleteFun={() => deleteUserByAdmin(modal.info.AuthId)}
                title="کاربر" />}
            {modal.open === "ویرایش" &&
                <OperationModal
                    craeteFun={() => { }}
                    editFun={editUserByAdmin}
                    initialValues={modal.values}
                    items={modal.name === "ویرایش" ? list.operation.edit : []}
                    title="کاربر"
                    validationSchema={{}}
                />}
        </div>
    );
};

export default Users;
