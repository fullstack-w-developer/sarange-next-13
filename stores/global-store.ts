import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
interface UseGlobalStore {
    isDriver: boolean | null;
    setIsDriver(isDriver: boolean): void;
    isSignupUser: boolean;
    setIsSignupUser(isSigninUser: boolean): void;
}
const useGlobalStore = create<UseGlobalStore>()(
    devtools(
        immer((set) => ({
            isDriver: false,
            isSignupUser: false,
            setIsDriver: (isDriver: boolean) => {
                set((state) => {
                    state.isDriver = isDriver;
                });
            },
            setIsSignupUser: (isSigninUser: boolean) => {
                set((state) => {
                    state.isSignupUser = isSigninUser;
                });
            },
        })),
    ),
);

export default useGlobalStore;
