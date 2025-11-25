import { create } from 'zustand';
import { account } from "../lib/appwrite";
import { ID, Models } from 'appwrite';

interface UserState {
    user: Models.User<Models.Preferences> | null;
    loading: boolean;
    isLoggedIn: boolean | null;
    initialized: boolean;
    initializeUser: () => Promise<void>;
    signup: (email: string, password: string) => Promise<Models.User<Models.Preferences>>;
    setUser: (user: Models.User<Models.Preferences>) => void;
    login: (email: string, password: string) => Promise<Models.User<Models.Preferences>>;
    logout: () => Promise<void>;
}

const useUserStore = create<UserState>((set, get) => ({
    user: null,
    loading: true,
    isLoggedIn: null,
    initialized: false,

    initializeUser: async () => {
        const { initialized } = get();
        if (initialized) return;

        set({ loading: true });
        try {
            const user = await account.get();
            set({ user, isLoggedIn: true, loading: false, initialized: true });
        } catch (error) {
            set({ user: null, isLoggedIn: false, loading: false, initialized: true });
        }
    },

    signup: async (email, password) => {
        const { logout } = get();

        try {
            if (get().user) await logout();

            await account.create(ID.unique(), email, password);
            await account.createEmailPasswordSession(email, password);

            const user = await account.get();

            set({ user, isLoggedIn: true });
            return user;
        } catch (err) {
            throw err;
        }
    },

    setUser: (user) => set({ user, isLoggedIn: true }),

    login: async (email, password) => {
        const { logout } = get();

        try {
            if (get().user) await logout();

            await account.createEmailPasswordSession(email, password);

            const loggedInUser = await account.get();
            set({ user: loggedInUser, isLoggedIn: true });
            return loggedInUser;
        } catch (err) {
            throw err;
        }

    },

    logout: async () => {
        try {
            await account.deleteSession("current");
            set({ user: null, isLoggedIn: false });
        } catch (error) {
            console.error("Logout failed:", error);
        }
    },
}));

export default useUserStore;
