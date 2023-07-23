import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
interface UseUserStore {
    openRate: boolean;
    toggleOpenRate: () => void;
}
const useUserStore = create<UseUserStore>()(
    devtools(
        immer((set) => ({
            openRate: false,
            toggleOpenRate: () => {
                set((state) => {
                    state.openRate = !state.openRate;
                })
            }

        })),
    ),
);

export default useUserStore;
