import { create } from "zustand";

const orderStore = create((set, get) => ({
  orders: [],
  
  addOrder: (cart, totalAmount) => {
    if (!cart || cart.length === 0) return;

    const newOrder = {
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
