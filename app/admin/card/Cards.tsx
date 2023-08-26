"use client";

import DeleteComponent from "@/components/admin/permession/DeleteComponent";
import OperationModal from "@/components/admin/permession/OperationModal";
import Table from "@/components/common/Table";
import { initialValuesCard } from "@/helper/utils/initialValues";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import { addCardAction, deleteCardAction, editCardAction } from "@/server/admin/card";
import useAdminStore from "@/stores/admin-store";
import { User } from "@/types/User";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEditAlt, BiSearch } from "react-icons/bi";
interface Props {
    list: { data: any[]; Total: number; Headers: { Name: string }[]; operation: { Action: "حذف" | "ویرایش" | "ایجاد" }[] };
}
const Drivers = ({ list }: Props) => {
    const { modal, setModal } = useAdminStore()
    const [, setPage] = React.useState(1);
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        router.push(`/admin/card?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/card?q=${e.target.value}`);
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
                {list.operation.find((item) => item.Action === "ایجاد") && (
                    <button onClick={() => setModal({ open: "ایجاد", name: "ایجاد" })} className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg">کارت جدید</button>
                )}
            </div>
            <Table header={list.Headers}>
                {list.data?.map((item, i) => (
                    <StyledTableRow key={i}>
                        {item.Serial && <StyledTableCell align="center">{item.Serial}</StyledTableCell>}
                        { <StyledTableCell align="center">{item?.Owner?.FirstName}</StyledTableCell>}
                        {<StyledTableCell align="center">{item?.Owner?.LastName}</StyledTableCell>}
                        {item?.Status&&<StyledTableCell align="center">{item?.Status}</StyledTableCell>}

                        {list.operation.length !== 0 && (
                            <StyledTableCell width={"200px"}>
                                <div className="flex gap-3 items-center justify-center">
                                    {list.operation.map((operation, idx) => {
                                        if (operation.Action === "ایجاد") return
                                        return (
                                            (
                                                <button
                                                    onClick={() => setModal({ name: operation.Action, info: item, open: operation.Action })}

                                                    key={idx}
                                                    className={`flex items-center gap-1 text-[14px]  px-3 py-[8px] rounded-lg text-white ${operation.Action === "ویرایش" ? "bg-green-500" : "bg-red-500"
                                                        }`}
                                                >
                                                    <p className="pt-[1px]">{operation.Action}</p>
                                                    {operation.Action === "ویرایش" && <BiEditAlt size={14} color="#fff" />}
                                                    {operation.Action === "حذف" && <AiFillDelete size={14} color="#fff" />}
                                                </button>
                                            )
                                        )
                                    })}
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
            {modal.open === "حذف" && <DeleteComponent name={`شماره سریال: ${modal.info.Serial}`}  deleteFun={()=>deleteCardAction(modal.info._id)} title="کارت" />}
            <OperationModal
                items={[]}
                craeteFun={addCardAction}
                editFun={editCardAction}
                initialValues={initialValuesCard}
                title="کارت"
                validationSchema={{}}

            />
        </div>
    );
};

export default Drivers;
