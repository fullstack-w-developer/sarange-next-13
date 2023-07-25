import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
type MoneyTransfer = {
    Amount?: number;
};
interface UseUserStore {
    openRate: boolean;
    moneytransfer: MoneyTransfer | null;
    toggleOpenRate: () => void;
    setMoneytransfer: (moneyTransfer: MoneyTransfer | null) => void;
}
const useUserStore = create<UseUserStore>()(
    devtools(
        immer((set) => ({
            openRate: false,
            moneytransfer: null,
            toggleOpenRate: () => {
                set((state) => {
                    state.openRate = !state.openRate;
                });
            },
            setMoneytransfer: (moneyTransfer: MoneyTransfer | null) => {
                set((state) => {
                    state.moneytransfer = { ...state.moneytransfer, ...moneyTransfer };
                });
            },
        })),
    ),
);

export default useUserStore;
