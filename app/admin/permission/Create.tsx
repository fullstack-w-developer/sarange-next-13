"use client";
import DeletePermisstion from "@/components/admin/permession/DeletePermisstion";
import Permession from "@/components/admin/permession/Permession";
import Table from "@/components/common/Table";
import { StyledTableCell, StyledTableRow } from "@/helper/utils/mui";
import usePermisstionStore from "@/stores/permisstion-store";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
interface Props {
    permession: { Total: number; Permissions: any[] };
}
const Create = ({ permession }: Props) => {
    const {setPermisstion } = usePermisstionStore();
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin/permession/create?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin/permession/create?q=${e.target.value}`);
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
                    onClick={() => setPermisstion({ open: "add", name: "add" })}
                    className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg"
                >
                    جدید
                </button>
            </div>
            <Table header={[{ Name: "نقش" }, { Name: "Resource" }, { Name: "Action" }, { Name: "عملیات" }]}>
                {permession.Permissions?.map((item) => (
                    <StyledTableRow key={item._id}>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Role?.Name}</span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Resource?.Name}</span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <span className="font-artin-regular">{item.Action?.Name}</span>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            <div className="">
                                <button
                                    onClick={() => setPermisstion({ data: item, name: "delete", open: "delete" })}
                                    className="bg-red-500 mx-3 text-white px-3 py-1 rounded-lg !font-artin-regular"
                                >
                                    حذف
                                </button>
                                <button
                                    onClick={() => setPermisstion({ name: "edit", data: item, open: "edit" })}
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
                count={Math.ceil(permession.Total / 10)}
                variant="outlined"
                shape="rounded"
            />
            {
            
                <Permession />
            }
            <DeletePermisstion />
        </div>
    );
};

export default Create;
