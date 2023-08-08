import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface UseCounterStore {
    stepCardblocking: number;
    step: number;
    information: {
        phone: string;
        code: string;
        firstName: string;
        lastName: string;
        sex: string;
        cardPassword: string;
        IsNewUser: null | boolean;
        cardId: string;
        hasUserActiveCard: boolean | null;
    };
    cardblocking: {
        phone: string;
        code: string;
        cardId: string;
    };
    setInformation: (info: any) => void;
    setCardblocking: (info: any) => void;
    setStep: (step: number) => void;
    setStepCardblocking: (step: number) => void;
}
const useCounterStore = create<UseCounterStore>()(
    devtools(
        immer((set) => ({
            step: 0,
            stepCardblocking: 0,
            cardblocking: {
                cardId: "",
                code: "",
                phone: "",
            },
            setStep: (step: number) => {
                set((state) => {
                    state.step = step;
                });
            },
            setStepCardblocking: (step: number) => {
                set((state) => {
                    state.stepCardblocking = step;
                });
            },
            information: {
                cardPassword: "",
                code: "",
                firstName: "",
                lastName: "",
                sex: "",
                phone: "",
                IsNewUser: null,
                cardId: "",
                hasUserActiveCard: null,
            },
            setInformation: (info) => {
                set((state) => {
                    state.information = { ...state.information, ...info };
                });
            },
            setCardblocking: (info) => {
                set((state) => {
                    state.cardblocking = { ...state.cardblocking, ...info };
                });
            },
        })),
    ),
);

export default useCounterStore;
