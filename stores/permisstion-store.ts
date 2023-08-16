import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
type ModalType = {
    open?: "حذف" | "ویرایش" | boolean;
    data?: any;
    name?: "action" | "role" | "";
};
type PermisstionType = {
    open?: "delete" | "edit" | "add" | boolean;
    data?: any;
    name?: "delete" | "edit" | "add" | "";
};
interface UsePermisstionStore {
    permisstion: PermisstionType;
    modal: {
        open: "حذف" | "ویرایش" | boolean;
        data: any;
        name: "action" | "role" | "";
    };
    setModal: ({ open, data }: ModalType) => void;
    setPermisstion: ({ open, data, name }: PermisstionType) => void;
}
const usePermisstionStore = create<UsePermisstionStore>()(
    devtools(
        immer((set) => ({
            permisstion: {
                open: false,
                data: null,
                name: "",
            },
            modal: {
                open: false,
                data: null,
                name: "",
            },
            setModal: ({ data, open, name }: ModalType) => {
                set((state) => {
                    state.modal.open = open ? open : false;
                    state.modal.data = data ? data : null;
                    state.modal.name = name ? name : "";
                });
            },
            setPermisstion: ({ data, open, name }: PermisstionType) => {
                set((state) => {
                    state.permisstion.open = open ? open : false;
                    state.permisstion.data = data ? data : null;
                    state.permisstion.name = name ? name : "";
                });
            },
        })),
    ),
);

export default usePermisstionStore;
