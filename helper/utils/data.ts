"use client";
import Image1 from "@/assets/images/image1.png"
import Image2 from "@/assets/images/image2.jpg"
import Image3 from "@/assets/images/image3.jpg"
import {  Home_icons, User_icon, Wallet_icon } from "@/components/icons/icons";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
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
export const optionYesOrNo = [
    {
        value: true,
        label: "بله",
    },
    {
        value: false,
        label: "خیر",
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
        name: "خانه",
        icon: Home_icons,
        url: "/counter",
    },
    {
        name: "تراکنش",
        icon: Wallet_icon,
        url: "/counter/transactions",
    },
    {
        name: "پروفایل",
        icon: User_icon,
        url: "/counter/profile",
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
        name: "شارژ حساب",
        icon: BsFillCreditCardFill,
        url: "/user/sharje",
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

export const withdrawalRequestStatusEnum = {
    WAITING: "درحال انتظار",
    SUCCESS: "تسویه شده",
    FAILED: "ناموفق",
};

export const linksCounter = [
    {
        name: "شارژ با اسکن",
        url: "",
        icon: "",
    },
    {
        name: "شارژ با شماره سریال",
        url: "",
        icon: "",
    },
    {
        name: "مسدودی کارت",
        url: "",
        icon: "",
    },
    {
        name: "موجودی کاربر",
        url: "",
        icon: "",
    },
    {
        name: "کارت جدید",
        url: "",
        icon: "",
    },
];

export const headerTableUser = ["نام", "خانوادگی", "شماره تلفن", "تاریخ عضویت", "جنسیت", "موجودی"];

export const headerMenu = [
    {
        title: "صفحه اصلی",
        url: "",
    },
    {
        title: "آشنایی با پارک",
        url: "",
    },
    {
        title: "کنسرسیوم‌ها",
        url: "",
    },
    {
        title: "مراکز وابسته",
        url: "",
    },
    {
        title: "معرفی شرکت‌ها",
        url: "",
    },
    {
        title: "اطلاع رسانی‌ها",
        url: "",
    },
    {
        title: "فرم‌ها و آیین نامه",
        url: "",
    },
    {
        title: "سامانه ها",
        url: "",
    },
    {
        title: "ارتباط با ما",
        url: "",
    },
];

export const itemsRoute = [
    {
        name: "Name",
        title: "نام مسیر",
        type: "text",
    },
    {
        name: "Cost",
        title: "هزینه",
        type: "text",
    },
];
export const itemsCard = [
    {
        name: "Serial",
        title: "شماره سریال",
        type: "text",
    },
    {
        name: "Status",
        title: "وضعیت",
        type: "radio",
    },
];

export const columnsUsers: GridColDef[] = [
    {
        field: "id",
        headerName: "ردیف",
        valueGetter: (params: GridValueGetterParams) => `${1}`,
    },
    {
        field: "FirstName",
        headerName: "نام",
    },
    {
        field: "LastName",
        headerName: "نام خانوادگی",
    },
    {
        field: "Balance",
        headerName: "موجودی",
    },
    {
        field: "Phone",
        headerName: "موبایل",
    },
    {
        field: "createdAt",
        headerName: "تاریج ایجاد",
    },
    {
        field: "Sex",
        headerName: "جنسیت",
    },
];




export const header = [
    {
      title: "درباره ما",
      link: "/aboutus",
    },
    {
      title: "تماس با ما",
      link: "/callus",
    },
    {
      title: "خدمات",
      link: "/servic",
    },
    {
      title: "راهنما و قوانین",
      link: "/rules",
    },
  ];
  export const socialNetworks = [
    {
      title: "ایده و هدف خود از طراحی اپ را مشخص کنید",
      icon: "",
    },
    {
      title: "طراحی وایرفریم",
      icon: "",
    },
    {
      title: "تحقیق در مورد اپلیکیشن",
      icon: "",
    },
    {
      title: "طراحی گرافیک اپلیکیشن (UI/Ux)",
      icon: "",
    },
    {
      title: "برنامه نویسی بک اند و فرانت اپلیکیشن",
      icon: "",
    },
    {
      title: "تست اپلیکیشن",
      icon: "",
    },
  ];
  

  export const sell_products = [
    {
        title:"   فروشگاهی",
        price:"495",
        options:[
            "پهنای باند نامحدود",
            "اتصال به دامنه‌ی دلخواه اختصاصی",
            "دسترسی به تمام قالب های سایت",
            "هماهنگ با گوشی و تبلت(ریسپانسیو)",
            "وبلاگ(جهت انتشار محتوا)",
            "درگاه پرداخت اینترنتی",
            "سیستم عضویت",
            "سیستم فرم ساز پیشرفته",
            "کلیه امکانات سایت های فروشگاهی",
        ],
        src:Image1
    },
    {
        title:"   شرکتی",
        price:"495",
        options:[
            "پهنای باند نامحدود",
            "اتصال به دامنه‌ی دلخواه اختصاصی",
            "دسترسی به تمام قالب های سایت",
            "هماهنگ با گوشی و تبلت(ریسپانسیو)",
            "وبلاگ(جهت انتشار محتوا)",
            "درگاه پرداخت اینترنتی",
            "سیستم عضویت",
            "سیستم فرم ساز پیشرفته",
            "کلیه امکانات سایت های شرکتی",
        ],
        src:Image2
    },
    {
        title:"  خبری",
        price:"495",
        options:[
            "پهنای باند نامحدود",
            "اتصال به دامنه‌ی دلخواه اختصاصی",
            "دسترسی به تمام قالب های سایت",
            "هماهنگ با گوشی و تبلت(ریسپانسیو)",
            "وبلاگ(جهت انتشار محتوا)",
            "درگاه پرداخت اینترنتی",
            "سیستم عضویت",
            "سیستم فرم ساز پیشرفته",
            "کلیه امکانات سایت های خبری",
        ],
        src:Image3
    },
    {
        title:"کارت ویزیتی",
        price:"495",
        options:[
            "پهنای باند نامحدود",
            "اتصال به دامنه‌ی دلخواه اختصاصی",
            "دسترسی به تمام قالب های سایت",
            "هماهنگ با گوشی و تبلت(ریسپانسیو)",
            "وبلاگ(جهت انتشار محتوا)",
            "درگاه پرداخت اینترنتی",
            "سیستم عضویت",
            "سیستم فرم ساز پیشرفته",
            "کلیه امکانات سایت های خبری",
        ],
        src:Image1
    },
    {
        title:"املاکی",
        price:"495",
        options:[
            "پهنای باند نامحدود",
            "اتصال به دامنه‌ی دلخواه اختصاصی",
            "دسترسی به تمام قالب های سایت",
            "هماهنگ با گوشی و تبلت(ریسپانسیو)",
            "وبلاگ(جهت انتشار محتوا)",
            "درگاه پرداخت اینترنتی",
            "سیستم عضویت",
            "سیستم فرم ساز پیشرفته",
            "کلیه امکانات سایت های املاکی",
        ],
        src:Image2
    },
  ]