"use client";
import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Button from "@/components/common/Button";
import { GoArrowRight } from "react-icons/go";
import useCounterStore from "@/stores/counter-store";

let html5QrCode: any;
const qrConfig = {
    fps: 10,
    qrbox: { width: 300, height: 300 },
    torchOn: true,
};

const ScanComponent = () => {
    const { information, setStep } = useCounterStore();

    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
    }, []);

    const handleClickAdvanced = async () => {
        const qrCodeSuccessCallback = (result: string) => {
            onResult(result);
            handleStop();
        };

        await html5QrCode.start({ facingMode: "user" }, qrConfig, qrCodeSuccessCallback);
    };

    const handleStop = () => {
        try {
            html5QrCode
                .stop()
                .then(() => {
                    html5QrCode.clear();
                })
                .catch((err: any) => {});
        } catch (err) {
            console.log(err);
        }
    };

    const backScreen = () => {
        return handleStop();
    };

    const onResult = (result: string) => {
        // setResult("105")
        backScreen();

        // router.push(`/user/inquiry?code=${23456}&type=${PaymentTypeEnum.USER_SCAN_QR_CODE}`);
        // return handleStop();
    };

    useEffect(() => {
        handleClickAdvanced();
    }, []);

    const handleClick = () => {
        setStep(3);
        handleStop();
    };
    return (
        <div className="relative h-screen bg-white">
            <div id="reader" className="w-full" />

            <div className="absolute flex items-center gap-6 w-[90%] left-1/2 -translate-x-1/2 bottom-4">
                <Button
                    icon={<GoArrowRight />}
                    className="custom_btn !min-w-[120px] !bg-transparent text-black flex-1"
                    name="بازگشت"
                />
                <Button onClick={handleClick} name={"مرحله بعدی"} className="!bg-green-600  text-white" />
            </div>
        </div>
    );
};
export default ScanComponent;
