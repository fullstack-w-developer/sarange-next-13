import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "@/types/User";

type TypeOperationUsersAdmin = {
    open?:"حذف" | "ویرایش" | false;
    info?:User | null;
    operation?:any
}
interface UseAdminStore {
    operationUser: {
        open: "حذف" | "ویرایش" | false;
        info: User | null;
        operation:any
    };
    toggle_opration_user: ({open,info,operation}:TypeOperationUsersAdmin)=> void;
}
const useAdminStore = create<UseAdminStore>()(
    devtools(
        immer((set) => ({
            operationUser: {
                open: false,
                info: null,
                operation:null
            },
            toggle_opration_user: ({info,open,operation}) => {
                set((state) => {
                    state.operationUser.open = open ? open:false;
                    state.operationUser.info = info ? info : null;
                    state.operationUser.operation = operation ? operation : null;
                });
            },
        })),
    ),
);

export default useAdminStore;
