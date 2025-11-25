import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import userDetails from "../stores/userDetails";

const Header: React.FC = () => {
    const [menu, setMenu] = useState<boolean>(false);
    const [search, setSearch] = useState<boolean>(false);

    const { user, logout } = userDetails();

    return (
        <div className="flex flex-col sm:flex-row bg-[rgba(32,32,32,1)] text-white p-5 gap-5 items-center sm:justify-between">
            {/*LOGO SECTION*/}
            <div className="flex justify-between w-full sm:w-auto">
                <Link to="/" className="absolute top-4 left-4">
                    <img
                        src="/assets/MESKYLogo.png"
                        alt="App Logo"
                        className="h-8 w-auto"
                    />
                </Link>
                <div className="flex gap-3 sm:hidden">
                    <button onClick={() => setSearch(!search)}>
                        <img
                            src="/assets/searchIcon.png"
                            alt="Search"
                            className="w-5 h-5"
                        />
                    </button>
                    <button onClick={() => setMenu(!menu)}>
                        <img
                            src="/assets/hamburgerIcon.png"
                            alt="hamburger icon"
                            className="w-5 h-5"
                        />
                    </button>
                </div>
            </div>

            {/* SEARCH BAR */}
            <div
                className={`items-center bg-gray-950 text-gray-200 rounded max-w-xs px-2 py-1 ${search ? "flex" : "hidden"
                    } sm:flex`}
            >
                <img
                    src="/assets/searchIcon.png"
                    alt="Search"
                    className="w-5 h-5 m-1"
                />
                <input
                    type="text"
                    className="bg-gray-950 text-gray-200 w-xs"
                    placeholder="Search Products, Brands and more"
                />
            </div>

            {/* NAVIGATION LINKS */}
            <div
                className={`${menu ? "flex" : "hidden"
                    } flex-col sm:flex-row sm:flex space-x-0 sm:space-x-5 items-center`}
            >
                <Link to="/">Home</Link>
                <Link to="/career">Careers</Link>
                <Link to="/shopNow">ShopNow</Link>
                <Link to="/product/orders">Orders</Link>
            </div>

            {/* ICON */}
            <div
                className={`${menu ? "flex" : "hidden"
                    } flex-col sm:flex-row sm:flex gap-2 items-center`}
            >
                <CartButton />
                <div className="relative p-2 ">
                    <img src="/assets/notificationIcon.png" alt="cart icon" />
                    <div className="absolute bg-red-600 p-1.5 rounded-xl top-1 right-1 text-xs"></div>
                </div>
                {user && (
                    <img
                        src="/assets/userImage.png"
                        alt="profile image"
                        className="w-5 h-5 rounded-2xl"
                    />
                )}

                <nav>
                    {user ? (
                        <button onClick={logout}>LOGOUT</button>
                    ) : (
                        <Link to="/login">LOGIN</Link>
                    )}
                </nav>
            </div>
        </div>
    );
};

export default Header;
