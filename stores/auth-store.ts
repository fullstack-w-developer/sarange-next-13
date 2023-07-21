import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { User } from "../types/User";
interface UseAuthStore {
    user: User | null;
    setUser: ({ user }: { user: User | any }) => void;
}
const useAuthStore = create<UseAuthStore>()(
    devtools(
        immer((set) => ({
            user: null,

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
        })),
    ),
);

export default useAuthStore;
