import { create } from 'zustand';
import productData from '../data/productDetails.json';

export interface Product {
    id: number;
    name: string;
    brand: string;
    subcategory1: string[];
    subcategory2: string[];
    price: number;
    originalPrice: string;
    rating: string;
    description: string;
    longDescription: {
        loremIpsum: string;
        overview: string;
        howToUse: string;
        productSpecification: {
            brandName: string;
            weight: string;
            dimensions: string;
            soldBy: string;
            shippedFrom: string;
        };
        ingredients: string[];
        claims: string[];
        manufacturing: {
            madeIn: string;
            facility: string;
        };
    };
    image: string;
    "more-images": string[];
    stock: number;
}

export interface CartItem {
    id: number;
    quantity: number;
}

interface CartState {
    products: Product[];
    cart: CartItem[];
    cartCount: number;
    addToCart: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    emptyCart: () => void;
}

const cartStore = create<CartState>((set, get) => ({
    products: productData as Product[],
    cart: [],
    cartCount: 0,

    addToCart: (productId: number) => {
        const { products, cart } = get();

        const productIndex = products.findIndex((product) => product.id === productId);

        if (productIndex === -1) return;

        const product = products[productIndex];
        if (product.stock <= 0) {
            alert("out of stock");
            return;
        }

        const updateProducts = [...products];
        updateProducts[productIndex] = { ...product, stock: product.stock - 1 };

        const cartIndex = cart.findIndex((product) => product.id === productId);
        let updatedCart: CartItem[] = [];
        if (cartIndex !== -1) {
            updatedCart = [...cart];
            updatedCart[cartIndex] = {
                ...updatedCart[cartIndex],
                quantity: updatedCart[cartIndex].quantity + 1,
            };
        } else {
            updatedCart = [...cart, { id: product.id, quantity: 1 }];
        }

        set({
            products: updateProducts,
            cart: updatedCart,
            cartCount: updatedCart.reduce((acc, item) => acc + item.quantity, 0),
        });
    },
    removeFromCart: (productId: number) => {
        const { products, cart } = get();

        const productIndex = products.findIndex(product => product.id === productId);
        const cartIndex = cart.findIndex(item => item.id === productId);

        if (cartIndex === -1) return;

        const product = products[productIndex];
        const cartItem = cart[cartIndex];

        const updatedProducts = [...products];
        updatedProducts[productIndex] = {
            ...product,
            stock: product.stock + 1,
        };

        let updatedCart = [...cart];

        if (cartItem.quantity > 1) {
            updatedCart[cartIndex] = {
                ...cartItem,
                quantity: cartItem.quantity - 1,
            };
        } else {
            updatedCart.splice(cartIndex, 1);
        }

        set({
            products: updatedProducts,
            cart: updatedCart,
            cartCount: updatedCart.reduce((acc, item) => acc + item.quantity, 0),
        });
    },
    emptyCart: () => set({ cart: [], cartCount: 0 }),
}));

export default cartStore;
