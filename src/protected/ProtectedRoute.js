import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    return user ? <Outlet /> : <Navigate to="/" />;
};
