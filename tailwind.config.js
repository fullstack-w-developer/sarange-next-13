/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                orange: "#F67D14",
                gray_black: "#464646",
                init: "#8D50EF",
                yellow: "#F0C414",
                blue: "#4252FF",
                black: "#242E42",
                gray__: "#F1F1F1",
                gray_light: "#EFEFF4",
                gray_dark: "#C8C7CC"
            },
            boxShadow: {
                shadowBtn: "0px 10px 24px 0px rgba(238, 117, 106, 0.47)",
                auth: "0px -5px 20px 0px rgba(0, 0, 0, 0.10)"

            },
            fontFamily: {
                "artin-bold": "artin-bold",
                "artin-regular": "artin-regular",
                "artin-light": "artin-light",
                "artin-black": "artin-black",
                "artin-thin": "artin-thin",
                "estedad-bold": "estedad-bold",
                "estedad-medium": "estedad-medium",
                "estedad-exbold": "estedad-exbold",
                bold: "bold",
                num_bold: "num-bold",
                extra_num_bold: "extra_num_bold",
                semibold: "semibold",
                light: "light",
                regular: "regular",
                normal: "regular",
                black: "black",
            },
            animation: {
                'spin-slow': 'spin 5s linear infinite',
            }
        },
    },
    plugins: [],
};
