import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import userDetails from "./stores/userDetails";

const ProtectedRoute: React.FC = () => {
    const { isLoggedIn, loading } = userDetails();

    if (loading || isLoggedIn === null) return <div>Loading...</div>;

    if (!isLoggedIn) return <Navigate to="/login" replace />;

    return <Outlet />;
};

export default ProtectedRoute;
