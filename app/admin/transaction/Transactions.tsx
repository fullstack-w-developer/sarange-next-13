"use client";
import DeleteUserByAdmin from "@/components/admin/DeleteUserByAdmin";
import EditUser from "@/components/admin/EditUser";
import Table from "@/components/common/Table";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import { convertDate, spratorNumber, toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import useAdminStore from "@/stores/admin-store";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt, BiSearch } from "react-icons/bi";
interface Props {
    list: { Transactions:any[]; Total: number; Headers: { Name: string }[]; operation: { Action: "حذف" | "ویرایش" }[] };
}
const Transactions = ({ list }: Props) => {
    const { toggle_opration_user, operationUser } = useAdminStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin?q=${e.target.value}`);
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
            <Table header={list.Headers}>
                {list.Transactions?.map((item, i) => (
                    <StyledTableRow key={i}>
                        {item.FirstName && <StyledTableCell align="center">{item.FirstName}</StyledTableCell>}
                        {item.LastName && <StyledTableCell align="center">{item.LastName}</StyledTableCell>}
                        {item.Phone && <StyledTableCell align="center">{toFarsiNumber(item.Phone)}</StyledTableCell>}
                        {item.createdAt && <StyledTableCell align="center">{convertDate(item.createdAt)}</StyledTableCell>}
                        {item.Sex && <StyledTableCell align="center">{item.Sex}</StyledTableCell>}
                        {item.Balance && <StyledTableCell align="center">{spratorNumber(item.Balance)} تومان</StyledTableCell>}
                        {list.operation.length !== 0 && (
                            <StyledTableCell width={"200px"}>
                                <div className="flex gap-3 items-center justify-center">
                                    {list.operation.map((operation, idx) => (
                                        <button
                                            onClick={() =>
                                                toggle_opration_user({ open: operation.Action, info: item, operation: operation })
                                            }
                                            key={idx}
                                            className={`flex items-center gap-1 text-[14px]  px-3 py-[8px] rounded-lg text-white ${
                                                operation.Action === "ویرایش" ? "bg-green-500" : "bg-red-500"
                                            }`}
                                        >
                                            <p className="pt-[1px]">{operation.Action}</p>
                                            {operation.Action === "ویرایش" && <BiEditAlt size={14} color="#fff" />}
                                            {operation.Action === "حذف" && <AiFillDelete size={14} color="#fff" />}
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
            {operationUser.open === "حذف" && <DeleteUserByAdmin />}
            {operationUser.open === "ویرایش" && <EditUser />}
        </div>
    );
};

export default Transactions;
