import React from "react";
import cartStore from "../stores/cartStore";
import { useNavigate } from "react-router-dom";

const CartButton: React.FC = () => {
    const { cartCount } = cartStore();
    const navigate = useNavigate();
    const handleRedirection = () => (
        navigate("/product/cart")
    )

    return (
        <div className="relative p-2 cursor-pointer" onClick={handleRedirection}>
            <img src="/assets/carticon.png" alt="cart icon" />
            <div className="absolute bg-white text-black p-1 rounded-xl top-0 right-0">
                <p className="text-xs">{cartCount}</p>
            </div>
        </div>
    );
};

export default CartButton;
