import {create} from 'zustand';
import productData from '../data/productDetails.json';

const cartStore = create((set,get) => ({
    products : productData,
    cart : [],
    cartCount : 0,

    addToCart : (productId) => {
        const {products, cart} = get();

        const productIndex = products.findIndex((product) => product.id === productId);
        // if (productIndex === -1) return alert("not found");
        
        const product = products[productIndex];
        if (product.stock <= 0) return;  // alert("out of stock");

        const updateProducts = [...products];
        updateProducts[productIndex] = {...product, stock : product.stock - 1,}

        const cartIndex = cart.findIndex((product) => product.id === productId);
        let updatedCart = []
        if (cartIndex !== -1 ){
            updatedCart = [...cart];
            updatedCart[cartIndex] = {
                ...updatedCart[cartIndex],
                quantity : updatedCart[cartIndex].quantity + 1,
            };
        }else{
            updatedCart = [...cart, { id: product.id, quantity: 1 }];
        }

        set({
            products : updateProducts,
            cart : updatedCart,
            cartCount : updatedCart.reduce((acc, item) => acc + item.quantity, 0),
        });

        // console.log(products);
        
    }, 
    removeFromCart: (productId) => {
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