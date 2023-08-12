import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
type ModalType = {
    open?: "حذف" | "ویرایش" | boolean;
    data?: any;
    name?: "action" | "role" | "";
};
interface UsePermisstionStore {
    modal: {
        open: "حذف" | "ویرایش" | boolean;
        data: any;
        name: "action" | "role" | "";
    };
    setModal: ({ open, data }: ModalType) => void;
}
const usePermisstionStore = create<UsePermisstionStore>()(
    devtools(
        immer((set) => ({
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
        })),
    ),
);

export default usePermisstionStore;
