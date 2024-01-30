import { Dash,Home } from "@/components/icons/icons";

export const userDashboard = [
    {
        title: "داشبورد من",
        icon: Home,
        iconFill: Dash,
        url: "/",
    },
    {
        title: "کارگاه‌های من",
        icon: Home,
        iconFill: Dash,
        url: "/myworkshopuser",
    },
    {
        title: "پیام‌ها",
        icon: Home,
        iconFill: Dash,
        url: "/ticket",
    },
    {
        title: "اطلاعات من",
        icon: Home,
        iconFill: Dash,
        url: "/infouser",
    },
];

export const accessItems = [
    {
        name: "نقش",
        url: "/admin/role",
    },
    {
        name: "منابع",
        url: "/admin/resources",
    },
    {
        name: "سطح دسترسی",
        url: "/admin/permission",
    },
];
