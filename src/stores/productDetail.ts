import { create } from 'zustand'
import { Product } from './cartStore';

interface ProductDetailState {
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product) => void;
}

export const productDetail = create<ProductDetailState>((set) => ({
    selectedProduct: null,
    setSelectedProduct: (product) => set({ selectedProduct: product }),
}))
