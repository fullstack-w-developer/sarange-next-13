import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "@/types/User";

type TypeOperationUsersAdmin = {
    open?: "حذف" | "ویرایش" | "ایجاد" | false;
    info?: User | null;
    operation?: any;
    fun?: string;
};
interface UseAdminStore {
    operationUser: {
        open: "حذف" | "ویرایش" | "ایجاد" | false;
        info: User | null;
        operation: any;
        fun: string;
    };
    toggle_opration_user: ({ open, info, operation }: TypeOperationUsersAdmin) => void;
}
const useAdminStore = create<UseAdminStore>()(
    devtools(
        immer((set) => ({
            operationUser: {
                open: false,
                info: null,
                operation: null,
                fun: "",
            },
            toggle_opration_user: ({ info, open, operation, fun }) => {
                set((state) => {
                    state.operationUser.open = open ? open : false;
                    state.operationUser.info = info ? info : null;
                    state.operationUser.operation = operation ? operation : null;
                    state.operationUser.fun = fun ? fun : "";
                });
            },
        })),
    ),
);

export default useAdminStore;
