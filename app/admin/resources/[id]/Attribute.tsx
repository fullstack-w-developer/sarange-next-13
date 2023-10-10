"use client";
import AttributeAction from "@/components/admin/reference/Attribute";
import DeleteAttribute from "@/components/admin/reference/DeleteAttribute";
import BackHeader from "@/components/common/BackHeader";
import Table from "@/components/common/Table";
import { Delete_icon, EditIcon } from "@/components/icons/icons";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import useReferanceStore from "@/stores/reference-store";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { BiSearch } from "react-icons/bi";
interface Props {
    attributes: { Total: number; Attributes: any[] };
    id: string;
}
const Attribute = ({ attributes, id }: Props) => {
    const { toggleAttribute, attribute } = useReferanceStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin/resources/${id}?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/resources/${id}?q=${e.target.value}`);
    };
    const isOpen = attribute.open === "edit" || attribute.open === "add";
    return (
        <div className="flex-1 w-full mb-20">
            <BackHeader name="منابع" url="/admin/resources" />
            <div className="flex items-center justify-between my-10">
                <div className="flex items-center  lg:w-1/2 bg-[#f7f7f7] border px-2 border-[#e1e1e1] rounded-lg py-2">
                    <input
                        placeholder="جستجو..."
                        className="bg-transparent font-artin-regular outline-none w-full"
                        onChange={onChange}
                    />
                    <BiSearch size={20} />
                </div>
                <button
                    onClick={() => toggleAttribute({ open: "add", name: "add" })}
                    className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg"
                >
                    جدید
                </button>
            </div>
            <Table header={[{ Name: "نام" }, { Name: "مقدار(value)" }, { Name: "عملیات" }]}>
                {attributes.Attributes?.map((item) => (
                    <StyledTableRow key={item._id}>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Name}</span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Value}</span>
                        </StyledTableCell>
                        <StyledTableCell width={200} align="center">
                            <div className=" flex gap-4 justify-center items-center">
                                <button onClick={() => toggleAttribute({ info: item, name: "delete", open: "delete" })}>
                                    <Delete_icon className="text-red-500" />
                                </button>
                                <button onClick={() => toggleAttribute({ name: "edit", info: item, open: "edit" })}>
                                    <EditIcon className="text-[#9e9e9e]" />
                                </button>
                            </div>
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </Table>
            <Pagination
                onChange={handleChange}
                color="primary"
                className="flex justify-center items-center mt-10"
                count={Math.ceil(attributes.Total / 10)}
                variant="outlined"
                shape="rounded"
            />
            {isOpen && <AttributeAction id={id} />}
            {attribute.open === "delete" && <DeleteAttribute />}
        </div>
    );
};

export default Attribute;
