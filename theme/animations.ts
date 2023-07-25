import { Variants } from "framer-motion";

export const animationsScreens = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { once: true, amount: 0.8 },
};

export const variants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 2,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
        },
    },
};
