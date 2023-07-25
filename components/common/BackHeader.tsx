import Link from "next/link";
import React from "react";
import { MdArrowBackIosNew } from "react-icons/md";
interface Props {
    name: string;
    url: string;
}
const BackHeader = ({ name, url }: Props) => {
    return (
        <div className="flex items-center py-5 relative border-b border-gray-200  justify-center ">
            <Link className="absolute right-0" href={url}>
                {" "}
                <MdArrowBackIosNew className="rotate-180" size={20} />
            </Link>
            <p className="font-artin-bold text-xl">{name}</p>
        </div>
    );
};

export default BackHeader;
