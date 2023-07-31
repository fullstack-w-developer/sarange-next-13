import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface UseCounterStore {
    step: number;
    setStep: (step: number) => void;
    information: {
        phone: string;
        code: string;
        firstName: string;
        lastName: string;
        sex: string;
        cardPassword: string;
        IsNewUser: null | boolean;
        cardId: "";
    };
    setInformation: (info: any) => void;
}
const useCounterStore = create<UseCounterStore>()(
    devtools(
        immer((set) => ({
            step: 0,
            setStep: (step: number) => {
                set((state) => {
                    state.step = step;
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
            },
            setInformation: (info) => {
                set((state) => {
                    state.information = { ...state.information, ...info };
                });
            },
        })),
    ),
);

export default useCounterStore;
