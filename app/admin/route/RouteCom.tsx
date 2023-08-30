"use client";
import DeleteComponent from "@/components/admin/permession/DeleteComponent";
import OperationModal from "@/components/admin/permession/OperationModal";
import DataGridTable from "@/components/common/GridTable";
import Table from "@/components/common/Table";
import { itemsRoute } from "@/helper/utils/data";
import { initialValuesRoutes } from "@/helper/utils/initialValues";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import { validationSchemaRoutes } from "@/helper/utils/validation/referance";
import { addRouteAction, deleteRouteAction, editRouteAction } from "@/server/admin/route";
import useAdminStore from "@/stores/admin-store";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt, BiSearch } from "react-icons/bi";
interface Props {
    list: { data: any[]; Total: number; Headers: { Name: string }[]; operation: any };
}
const RouteCom = ({ list }: Props) => {
    const { modal, setModal } = useAdminStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin/route?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/route?q=${e.target.value}`);
    };

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
                        مسیر جدید
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
            {modal.open === "حذف" && <DeleteComponent deleteFun={() => deleteRouteAction(modal.info._id)} title="مسیر" />}

            <OperationModal
                validationSchema={validationSchemaRoutes}
                title="مسیر"
                initialValues={initialValuesRoutes}
                items={modal.name === "ویرایش" ? list.operation.edit : list.operation.create}
                craeteFun={addRouteAction}
                editFun={editRouteAction}
            />
        </div>
    );
};

export default RouteCom;
