import { create } from "zustand";
import { CartItem } from "./cartStore";

export interface Order {
    id: number;
    items: CartItem[];
    totalAmount: number;
    date: string;
}

interface OrderState {
    orders: Order[];
    addOrder: (cart: CartItem[], totalAmount: number) => void;
    clearOrders: () => void;
}

const orderStore = create<OrderState>((set, get) => ({
    orders: [],

    addOrder: (cart, totalAmount) => {
        if (!cart || cart.length === 0) return;

        const newOrder: Order = {
            id: Date.now(),
            items: cart,
            totalAmount,
            date: new Date().toLocaleString(),
        };

        set({
            orders: [...get().orders, newOrder],
        });
    },

    clearOrders: () => set({ orders: [] }),
}));

export default orderStore;
