"use client";
import Image from "next/image";
import Taxi from "@/assets/images/pay.jpg";
import Button from "@/components/common/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.svg";
import useGlobalStore from "@/stores/global-store";
import { useRouter } from "next/navigation";
import useFcmToken from "@/hooks/common/useFcmToken";
import { getMessaging, onMessage } from "firebase/messaging";
import firebaseApp from "@/helper/utils/firebase/firebase";

export default function Home() {
    const { fcmToken } = useFcmToken();

    const { setIsDriver } = useGlobalStore();
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            const messaging = getMessaging(firebaseApp);
            const unsubscribe = onMessage(messaging, (payload) => {
                console.log('Foreground push notification received:', payload);
            });
            return () => {
                unsubscribe(); // Unsubscribe from the onMessage event
            };
        }
    }, []);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => clearTimeout(timeout);
    }, []);

    const onClickLoginDriver = () => {
        setIsDriver(true);
        router.push("/auth/signin");
    };
    return (
        <div className="bg-gray-50/30">
            <div className="layout overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 1.4 }}
                    className={`flex flex-col gap-8 justify-center items-center flex-1 ${isVisible ? "block" : "hidden"}`}
                >
                    <Image src={Logo} alt="logo" />
                    <motion.h1 className={`font-artin-black text-black text-2xl text-center  `}>
                        به آپلیکیشن سارنگ خوش آمدید
                    </motion.h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 4.1 }}
                    className={`justify-center items-center flex-1 ${isVisible ? "hidden" : "flex"}`}
                >
                    <Image width={900} src={Taxi} alt="" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 900 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.9, delay: 4.5 }}
                    className="mb-5"
                >
                    <p>{fcmToken} token:</p>
                    <Link href="/auth/signin">
                        <Button name="بزن بریم" />
                    </Link>
                    <p className="border-b mt-6 border-dashed border-[#e4e4e4]"></p>
                    <button
                        onClick={onClickLoginDriver}
                        className="flex mt-3 gap-1 w-full text-gray-400 font-artin-bold text-[15px] justify-center  items-center"
                    >
                        <p className="text-gray-500">آماده ای برای کسب درآمد؟</p>
                        ورود راننده
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
