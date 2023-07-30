"use client";
import { Home_icons, User_icon, Wallet_icon } from "@/components/icons/icons";
import { BiLogoTelegram, BiSupport } from "react-icons/bi";
import { BsDiscord, BsFillCreditCardFill, BsTwitter } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
export const sexPerson = [
    {
        value: "مرد",
        label: "مرد",
    },
    {
        value: "زن",
        label: "زن",
    },
];

export const menuUser = [
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/user/profile",
    },
    {
        name: "صحفه اصلی",
        icon: Home_icons,
        url: "/user",
    },
    {
        name: "تراکنش ",
        icon: Wallet_icon,
        url: "/user/transactions",
    },
];

export const menuDriver = [
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/driver/profile",
    },
    {
        name: "خانه",
        icon: Home_icons,
        url: "/driver",
    },
    {
        name: "تراکنش",
        icon: Wallet_icon,
        url: "/driver/transactions",
    },
];
export const counterList = [
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/counter/profile",
    },
    {
        name: "خانه",
        icon: Home_icons,
        url: "/counter",
    },
    {
        name: "تراکنش",
        icon: Wallet_icon,
        url: "/counter/transactions",
    },
];

export const PaymentTypeEnum = {
    USER_SCAN_QR_CODE: "اسکن QR کد",
    USER_SCAN_QR_PAYMENT_GATEWAY: "اسکن QR کد و پرداخت از طریق درگاه پرداخت",
    USER_DRIVER_CODE: "وارد کردن کد راننده",
    USER_DRIVER_CODE_PAYMENT_GATEWAY: "وارد کردن کد راننده و پرداخت از طریق درگاه پرداخت",
    DRIVER_USER_CODE: "وارد کردن کد مشتری",
    DRIVER_SCAN_USER_CARD: "اسکن کارت مشتری به وسیله راننده",
};

export const moreMenuUser = [
    {
        name: "کارت‌ها",
        icon: BsFillCreditCardFill,
        url: "/user/cards",
    },
    {
        name: "انتفال وجه",
        icon: BsFillCreditCardFill,
        url: "/user/moneytransfer/1",
    },
    {
        name: "سفر‌های من",
        icon: FaCar,
        url: "/user/trip",
    },
    // {
    //     name: "پشتیبانی",
    //     icon: BiSupport,
    //     url: "/user/support",
    // },
];
export const MoreMenuDriver = [
    {
        name: "سفر‌ها",
        icon: FaCar,
        url: "/driver/trip",
    },
    {
        name: "تسویه",
        icon: FaCar,
        url: "/driver/checkout",
    },
    {
        name: "تسویه حساب ها اخیر",
        icon: FaCar,
        url: "/driver/checkout/recently",
    },
    {
        name: "امتیاز‌ها",
        icon: FaCar,
        url: "/driver/checkout/recently",
    },
];


export const social_media = [
    {
        icon: BiLogoTelegram,
        color: "#3390ec",
    },
    {
        icon: IoLogoWhatsapp,
        color: "#00a844",
    },
    {
        icon: BsTwitter,
        color: "#0096f5",
    },
    {
        icon: BsDiscord,
        color: "#626262",
    },
];




export const withdrawalRequestStatusEnum  = {
    WAITING: "درحال انتظار",
    SUCCESS: "تسویه شده",
    FAILED: "ناموفق"
};