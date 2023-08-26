"use client";
import Table from "@/components/common/Table";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import { convertDate, spratorNumber, toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import useAdminStore from "@/stores/admin-store";
import { User } from "@/types/User";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt, BiSearch } from "react-icons/bi";
interface Props {
    list: { Users: User[]; Total: number; Headers: { Name: string }[]; operation: { Action: "حذف" | "ویرایش" }[] };
}
const Drivers = ({ list }: Props) => {
    const { toggle_opration_user, operationUser } = useAdminStore();
    const [page, setPage] = React.useState(1);
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
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
                {list.Users?.map((user, i) => (
                    <StyledTableRow key={i}>
                        {user.FirstName && <StyledTableCell align="center">{user.FirstName}</StyledTableCell>}
                        {user.LastName && <StyledTableCell align="center">{user.LastName}</StyledTableCell>}
                        {user.Phone && <StyledTableCell align="center">{toFarsiNumber(user.Phone)}</StyledTableCell>}
                        {user.createdAt && <StyledTableCell align="center">{convertDate(user.createdAt)}</StyledTableCell>}
                        {user.Sex && <StyledTableCell align="center">{user.Sex}</StyledTableCell>}
                        {user.Balance && <StyledTableCell align="center">{spratorNumber(user.Balance)} تومان</StyledTableCell>}
                        {list.operation.length !== 0 && (
                            <StyledTableCell width={"200px"}>
                                <div className="flex gap-3 items-center justify-center">
                                    {list.operation.map((operation, idx) => (
                                        <button
                                            onClick={() =>
                                                toggle_opration_user({ open: operation.Action, info: user, operation: operation })
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
            {/* {operationUser.open === "ویرایش" && <EditUser />} */}
        </div>
    );
};

export default Drivers;
