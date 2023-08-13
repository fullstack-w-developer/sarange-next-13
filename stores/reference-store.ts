import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
type Attribute = { info?: any; open?: "add" | "edit" | "delete"; name?: "add" | "edit" | "delete" }
interface UseReferanceStore {
    newReferance: {
        open: boolean;
        info: any;
        name?: "add" | "edit";
    };
    attribute: {
        open: "add" | "edit" | "delete" | undefined;
        info: any;
        name?: "add" | "edit" | "delete";
    };
    toggleNewReferance: ({ info, open, name }: { info?: any; open?: boolean; name?: "add" | "edit" }) => void;
    toggleAttribute: ({ info, open, name }: Attribute) => void;
    deleteReferance: {
        open: boolean;
        info: any;
    };
    toggleDeleteReferance: ({ info, open }: { info?: any; open?: boolean }) => void;
}
const useReferanceStore = create<UseReferanceStore>()(
    devtools(
        immer((set) => ({
            attribute: {
                open: undefined,
                info: null,
                name: "add"
            },
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
            toggleAttribute: ({ open, info, name }: Attribute) => {
                set((state) => {
                    state.attribute.open = open ? open : undefined;
                    state.attribute.info = info ? info : null;
                    state.attribute.name = name ? name : "add";
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
