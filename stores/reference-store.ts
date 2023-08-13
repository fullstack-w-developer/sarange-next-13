import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface UseReferanceStore {
    newReferance: {
        open: boolean;
        info: any;
        name?: "add" | "edit";
    };
    toggleNewReferance: ({ info, open, name }: { info?: any; open?: boolean; name?: "add" | "edit" }) => void;
    deleteReferance: {
        open: boolean;
        info: any;
    };
    toggleDeleteReferance: ({ info, open }: { info?: any; open?: boolean }) => void;
}
const useReferanceStore = create<UseReferanceStore>()(
    devtools(
        immer((set) => ({
            newReferance: {
                open: false,
                info: null,
                name: "add",
            },
            deleteReferance: {
                open: false,
                info: null,
            },
            toggleNewReferance: ({ open, info, name }: { info?: any; open?: boolean; name?: "add" | "edit" }) => {
                set((state) => {
                    state.newReferance.open = open ? open : !state.newReferance.open;
                    state.newReferance.info = info ? info : null;
                    state.newReferance.name = name ? name : "add";
                });
            },
            toggleDeleteReferance: ({ info, open }: { info?: any; open?: boolean }) => {
                set((state) => {
                    state.deleteReferance.open = open ? open : !state.deleteReferance.open;
                    state.deleteReferance.info = info ? info : null;
                });
            },
        })),
    ),
);

export default useReferanceStore;
