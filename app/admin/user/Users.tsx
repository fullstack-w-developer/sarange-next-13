"use client";
import DeleteComponent from "@/components/admin/permession/DeleteComponent";
import OperationModal from "@/components/admin/permession/OperationModal";
import Table from "@/components/common/Table";
import { Delete_icon, EditIcon } from "@/components/icons/icons";
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
    const { modal, setModal } = useAdminStore()
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
            <Table subTitleFooter={list.Total} titleFooter="تعداد کاربران" header={list.Headers}>
                {list.data?.map((item: any, i: number) => (
                    <StyledTableRow key={i}>
                        {item.AuthId && <StyledTableCell align="center">{i+1}</StyledTableCell>}
                        {item.FirstName && <StyledTableCell align="center">{item.FirstName}</StyledTableCell>}
                        {item.LastName && <StyledTableCell align="center">{item.LastName}</StyledTableCell>}
                        {item.Phone && <StyledTableCell align="center">{toFarsiNumber(item.Phone)}</StyledTableCell>}
                        {item.createdAt && <StyledTableCell align="center">{convertDate(item.createdAt)}</StyledTableCell>}
                        {item.Sex && <StyledTableCell align="center">{item.Sex}</StyledTableCell>}
                        {Object.hasOwn(item,"Status") && <StyledTableCell align="center">{item.Status ? "فعال" : "غیر فعال"}</StyledTableCell>}
                        {item.Balance && <StyledTableCell align="center">{spratorNumber(item.Balance)} تومان</StyledTableCell>}
                        {list.operation.Total !== 0 && (
                            <StyledTableCell width={"100px"}>
                                <div className="flex gap-3 items-center justify-center">
                                    {list.operation.names.map((operation: any, idx: number) => (
                                        <button
                                            onClick={() =>
                                                setModal({ open: operation.Action, info: item, name: operation.Action })
                                            }
                                            key={idx}
                                            className={`flex items-center gap-0 text-[14px]  px-3 py-[8px] rounded-lg text-white `}
                                        >
                                            {operation.Action === "ویرایش" && <EditIcon className="text-[#9E9E9E]" />}
                                            {operation.Action === "حذف" && <Delete_icon className="text-[#DF2040] hover:text-red-400" />}
                                        </button>
                                    ))}
                                </div>
                            </StyledTableCell>
                        )}
                    </StyledTableRow>
                ))}
            </Table>
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
                    initialValues={generateObjectInitailValue(modal.name!,list.operation.edit,list.operation.create)}
                    items={modal.name === "ویرایش" ? list.operation.edit : []}
                    title="کاربر"
                    validationSchema={{}}
                />}
        </div>
    );
};

export default Users;
