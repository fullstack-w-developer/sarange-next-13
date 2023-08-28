"use client";
import DataGridTable from "@/components/common/GridTable";
import { User } from "@/types/User";
import { Pagination } from "@mui/material";
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
interface Props {
    list: { data: User[]; Total: number; Headers: { Name: string }[]; operation: any};
}
const Drivers = ({ list }: Props) => {
    console.log(list);
    const router = useRouter();
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/admin?skip=${(value - 1) * 10}`);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        router.push(`/admin?q=${e.target.value}`);
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
                {/* {list.operation.names.find((item:any) => item.Action === "ایجاد") && (
                    <button className="font-artin-bold text-xs bg-[#0096f5] text-white px-4 py-3 rounded-lg">راننده جدید</button>
                )} */}
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
        </div>
    );
};

export default Drivers;
