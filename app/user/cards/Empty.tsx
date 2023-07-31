import Image from "next/image";
import React from "react";
import EmptyImage from "@/assets/images/paymeny_card.jpg";

const Empty = ({ name }: { name: string }) => {
    return (
        <div className="mt-14">
            <Image src={EmptyImage} alt="" />
            <h1 className="text-center font-artin-black text-[#222] text-xl ">{name}</h1>
        </div>
    );
};

export default Empty;
