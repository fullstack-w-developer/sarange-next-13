/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                orange: "#F67D14",
                gray_black: "#464646",
            },
            boxShadow: {
                shadowBtn: "0px 10px 24px 0px rgba(238, 117, 106, 0.47)",
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
            },
        },
    },
    plugins: [],
};
