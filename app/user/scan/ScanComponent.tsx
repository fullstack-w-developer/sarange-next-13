"use client";
import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { PaymentTypeEnum } from "@/helper/utils/data";
import Link from "next/link";

let html5QrCode: any;
const qrConfig = {
    fps: 10,
    qrbox: { width: 300, height: 300 },
    torchOn: true,
};

const ScanComponent = () => {
    const router = useRouter();
    const qrRef = useRef<HTMLDivElement | any>(null);

    useEffect(() => {
        html5QrCode = new Html5Qrcode("reader");
    }, []);

    const handleClickAdvanced = async () => {
        const qrCodeSuccessCallback = () => {
            onResult();
            handleStop();
        };

        await html5QrCode.start({ facingMode: "environment" }, qrConfig, qrCodeSuccessCallback);
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

    const onResult = () => {
        router.push(`/user/inquiry?code=${23456}&type=${PaymentTypeEnum.USER_SCAN_QR_CODE}`);
    };

    useEffect(() => {
        handleClickAdvanced();
    }, []);
    return (
        <div className="relative h-screen bg-white">
            <div id="reader" className="w-full" />
            <div className="absolute w-[90%] left-1/2 -translate-x-1/2 bottom-10">
                <Link
                    href="/user"
                    onClick={backScreen}
                    className="!shadow-shadowBtn w-full h-[48px] flex justify-center items-center text-white font-artin-bold rounded-lg  !bg-orange "
                >
                    بازگشت
                </Link>
            </div>
        </div>
    );
};
export default ScanComponent;
