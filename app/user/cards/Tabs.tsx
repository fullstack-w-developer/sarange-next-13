"use client";
import BackHeader from "@/components/common/BackHeader";
import Button from "@/components/common/Button";
import CardBank from "@/components/common/CardBank";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { animationsScreens, variants } from "@/theme/animations";
import Empty from "./Empty";
import { TypeCardBank } from "@/types/Card";

interface Props {
    cards: TypeCardBank[];
    deActiveCard: (id: string) => void;
}
const Tabs = ({ cards, deActiveCard }: Props) => {
    const [select, setSelect] = useState(0);
    const itemTabs = ["کارت های فعال", "کارت های غیر‌فعال"];
    const onSelect = (idx: number) => {
        if (select === idx) return;
        setSelect(idx);
    };

    const isActiveCardFilter = cards.filter((card) => card.Status === true);
    const deActiveCardFilter = cards.filter((card) => card.Status === false);
    return (
        <motion.div className="w-90" {...animationsScreens}>
            <motion.div variants={variants}>
                <BackHeader url="/user/profile" name="کارت‌ها" />

                <div className=" mt-8 pb-10">
                    <div className="flex  gap-2 mt-2  shadow items-center p-1  bg-[#f8f8f8]">
                        {itemTabs.map((tab, index) => (
                            <button
                                onClick={() => onSelect(index)}
                                name={tab}
                                key={index}
                                className={`z-10 flex-1 py-3 text-xs rounded-lg font-estedad-medium ${select === index ? "!bg-orange text-white" : "!bg-transparent !text-[#222]"}`}
                            >{tab}</button>
                        ))}
                    </div>
                    {select === 0 ? (
                        isActiveCardFilter.length === 0 ? (
                            <Empty name="کارت فعالی وجود ندارد" />
                        ) : (
                            <div className="flex flex-col gap-5 mt-10">
                                {isActiveCardFilter.map((card, index) => (
                                    <CardBank deActiveCard={deActiveCard} disabled={false} card={card} key={index} />
                                ))}
                            </div>
                        )
                    ) : null}
                    {select === 1 ? (
                        deActiveCardFilter.length === 0 ? (
                            <Empty name="کارت غیر فعالی وجود ندارد" />
                        ) : (
                            <div className="flex flex-col gap-5 mt-10">
                                {deActiveCardFilter.map((card, index) => (
                                    <CardBank deActiveCard={deActiveCard} disabled={false} card={card} key={index} />
                                ))}
                            </div>
                        )
                    ) : null}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Tabs;
