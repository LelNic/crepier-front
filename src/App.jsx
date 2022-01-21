import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import { AuthContext } from "./contexts/AuthContext.js";
import { UserContext } from "./contexts/UserContext.js";
import { CartContext } from "./contexts/CartContext.js";
import { ProtectedRoute } from "./protected/ProtectedRoute.js";
import axios from "axios";
import Search from "./pages/Search/Search";
import Login from "./pages/Login/Login";
import ItemSingle from "./pages/ItemSingle/ItemSingle";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import Adresses from "./pages/Adresses/Adresses";

const App = () => {
    const [cartQuantity, setCartQuantity] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const qty = cart?.reduce((acc, curr) => acc + curr.qty, 0);
        setCartQuantity(qty);
        setCart(cart);
    }, []);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios
                .get("http://localhost:5000/security/user-is-auth", {
                    headers: {
                        "x-access-token": token,
                    },
                })
                .then(({ data }) => {
                    if (data.auth) {
                        setIsAuthenticated(true);
                        setUser(JSON.parse(localStorage.getItem("user")));
                    }
                })
                .catch(() => {
                    localStorage.removeItem("token");
                });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <UserContext.Provider value={{ user, setUser }}>
                <CartContext.Provider value={{ cartQuantity, setCartQuantity, cart, setCart }}>
                    <Header />
                    <main>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/search/:id" element={<ItemSingle />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/single/:id" element={<ItemSingle />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/panier" element={<Cart />} />

                            <Route path="/user" element={<ProtectedRoute />}>
                                <Route path="profile" element={<Profile />} />
                                <Route path="adresses" element={<Adresses />} />
                            </Route>
                        </Routes>
                    </main>
                    <Navbar />
                    <Wrapper />
                </CartContext.Provider>
            </UserContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
