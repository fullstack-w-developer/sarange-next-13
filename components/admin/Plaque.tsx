import { useEffect } from "react";

const Plaque = ({ formik }: { formik: any }) => {
    const isAnyFieldTouched = ["part1", "part2", "part3", "part4"].some(field => formik.touched[field])
    const isAnyFieldErrors = ["part1", "part2", "part3", "part4"].some(field => formik.errors[field])
    useEffect(() => {
        formik.setFieldValue("part2", "الف")
    }, [])
    return (
        <div>
            <label className="font-artin-regular lg:text-[12px] block mb-1 pr-1 text-[#2F2F2F]">پلاک</label>

            <div className="flex  h-[44px] font-artin-bold rounded-lg border overflow-hidden w-full justify-between items-center">
                <input
                    value={formik.values.part4}
                    onChange={(e) => formik.setFieldValue("part4", e.target.value)}
                    name="part4"
                    className="w-full h-full text-center border-l  outline-none"
                />
                <input
                    value={formik.values.part3}
                    onChange={(e) => formik.setFieldValue("part3", e.target.value)}
                    name="part3"
                    className="w-full h-full text-center border-l  outline-none"
                />
                <select
                    value={formik.values.part2}
                    onChange={(e) => formik.setFieldValue("part2", e.target.value)}
                    name="part2"
                    className="w-full  h-full text-center border-l  outline-none"
                >
                    <option>الف</option>
                    <option>ب</option>
                </select>
                <input
                    value={formik.values.part1}
                    onChange={(e) => formik.setFieldValue("part1", e.target.value)}
                    name="part1"
                    className="w-full h-full text-center   outline-none"
                />
            </div>
            
            <span className="blockname font-artin-light mt-[1px] text-[11px] pt-[2px] text-[#E40000] pr-1">
                {["part1", "part2", "part3", "part4"].some(field => formik.touched[field]) && ["part1", "part2", "part3", "part4"].some(field => formik.errors[field]) ? "فیلد اجباری است" : null}
            </span>
        </div>
    );
};

export default Plaque;
