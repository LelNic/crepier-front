import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Wrapper from "./components/Wrapper/Wrapper";
import { AuthContext } from "./contexts/AuthContext.js";
import { UserContext } from "./contexts/UserContext.js";
import { ProtectedRoute } from "./protected/ProtectedRoute.js";
import axios from "axios";
import ServiceDescription from "./components/ItemSingle/ItemSingle";
import "./App.css";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

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
                <Header />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/services/:id" element={<ServiceDescription />} />

                        <Route path="profile" element={<ProtectedRoute />}></Route>
                    </Routes>
                </main>
                <Navbar />
                <Wrapper />
            </UserContext.Provider>
        </AuthContext.Provider>
    );
};

export default App;
