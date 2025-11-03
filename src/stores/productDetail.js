import { create } from 'zustand'

export const productDetail = create((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}))
