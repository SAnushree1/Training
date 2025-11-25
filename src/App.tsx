import React, { useEffect } from "react";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import Career from "./pages/Career";

import CartLayout from "./layouts/CartLayout";
import Products from "./pages/Products";

import ProductLayout from "./layouts/ProductLayout";
import ProductContent from "./components/productComponents/ProductContent";
import ProductDescription from "./components/productComponents/ProductDescription";
import ProductUsage from "./components/productComponents/ProductUsage";
import ProductSpecification from "./components/productComponents/ProductSpecification";
import ProductIngredients from "./components/productComponents/ProductIngredients";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

import SignUpForm from "./pages/SignUpForm";
import LoginForm from "./pages/LoginForm";
import ProtectedRoute from "./ProtectedRoute";

import userDetails from "./stores/userDetails";

const App: React.FC = () => {
    const { initializeUser } = userDetails();

    useEffect(() => {
        initializeUser();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path="career" element={<Career />} />
                </Route>

                <Route path="/shopNow" element={<CartLayout />}>
                    <Route index element={<Products />} />
                </Route>

                <Route path="/product/:product_id" element={<ProductLayout />}>
                    <Route element={<ProductContent />}>
                        <Route index element={<ProductDescription />} />
                        <Route path="usage" element={<ProductUsage />} />
                        <Route path="specification" element={<ProductSpecification />} />
                        <Route path="ingredients" element={<ProductIngredients />} />
                    </Route>
                    <Route element={<ProtectedRoute />}>
                        <Route path="cart" element={<Cart />} />
                        <Route path="orders" element={<Orders />} />
                    </Route>
                </Route>

                <Route path="/signup" element={<SignUpForm />} />

                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
