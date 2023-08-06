"use client";
import { toFarsiNumber } from "@/helper/utils/toFarsiNumber";
import { useState, useEffect } from "react";

const CurrentTime = () => {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000);
        return function cleanup() {
            clearInterval(timer);
        };
    });
    return (
        <>
            <span>
                {" "}
                {toFarsiNumber(date.getMinutes())} : {toFarsiNumber(date.getHours())}
            </span>
        </>
    );
};

export default CurrentTime;
