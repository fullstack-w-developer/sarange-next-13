"use client";
import DeleteReferance from "@/components/admin/reference/DeleteReferance";
import NewReferance from "@/components/admin/reference/NewReferance";
import Table from "@/components/common/Table";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import useReferanceStore from "@/stores/reference-store";
import { Pagination } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
interface Props {
    references: { Total: number; Resources: any[] };
}
const References = ({ references }: Props) => {
    const { toggleNewReferance, toggleDeleteReferance } = useReferanceStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin/resources?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/resources?q=${e.target.value}`);
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
                <button
                    onClick={() => toggleNewReferance({})}
                    className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg"
                >
                    {" "}
                    جدید
                </button>
            </div>
            <Table header={[{ Name: "منبع" }, { Name: "عملیات" }]}>
                {references.Resources?.map((item) => (
                    <StyledTableRow key={item._id}>
                        <StyledTableCell align="center">
                            <Link href={`/admin/resources/${item._id}`}>
                                <span className="font-artin-regular">{item.Name}</span>
                            </Link>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <div className="">
                                <button
                                    onClick={() => toggleDeleteReferance({ info: item })}
                                    className="bg-red-500 mx-3 text-white px-3 py-1 rounded-lg !font-artin-regular"
                                >
                                    حذف
                                </button>
                                <button
                                    onClick={() => toggleNewReferance({ name: "edit", info: item })}
                                    className="bg-green-500 mx-3 text-white px-3 py-1 rounded-lg !font-artin-regular"
                                >
                                    ویرایش
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
                count={Math.ceil(references.Total / 10)}
                variant="outlined"
                shape="rounded"
            />
            <NewReferance />
            <DeleteReferance />
        </div>
    );
};

export default References;
