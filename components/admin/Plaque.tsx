import React from "react";
import Select from "../common/Select";
import { useFormik } from "formik";

const Plaque = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {},
    });
    return (
        <div>
            <label className="font-artin-regular lg:text-[12px] block mb-1 pr-1 text-[#2F2F2F]">پلاک</label>

            <div className="flex h-[44px] font-artin-bold rounded-lg border overflow-hidden w-full justify-between items-center">
                <input className="w-full h-full text-center border-l  outline-none" />
                <input className="w-full h-full text-center border-l  outline-none" />
                <select className="w-full  h-full text-center border-l  outline-none">
                    <option>الف</option>
                    <option>f</option>
                </select>
                {/* <input className='w-full h-full text-center border-l  outline-none'/> */}
                <input className="w-full h-full text-center   outline-none" />
            </div>
        </div>
    );
};

export default Plaque;
