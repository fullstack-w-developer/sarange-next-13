import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "../types/User";
interface UseAuthStore {
    user: User | null;
    setUser: ({ user }: { user: User | any }) => void;
    removeUser: () => void;
    openLogout:boolean;
    toggleLogout:()=>void;
}
const useAuthStore = create<UseAuthStore>()(
    devtools(
        immer((set) => ({
            user: null,
            openLogout:false,
            setUser: ({ user }: { user: User | any }) => {
                set((state) => {
                    state.user = { ...state.user, ...user };
                });
            },
            removeUser: () => {
                set((state) => {
                    state.user = null;
                });
            },
            toggleLogout: () => {
                set((state) => {
                    state.openLogout = !state.openLogout;
                });
            },
        })),
    ),
);

export default useAuthStore;
