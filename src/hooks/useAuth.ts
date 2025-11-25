import { useState, useEffect } from "react";
import { account, getCurrentUser } from "../lib/appwrite";
import { Models } from "appwrite";

export const useAuth = () => {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);

    useEffect(() => {
        getCurrentUser().then((user) => setUser(user));
    }, []);

    const logout = async () => {
        await account.deleteSession("current");
        setUser(null);

        alert("You have been logged out successfully!");
    };

    return { user, setUser, logout };
};
