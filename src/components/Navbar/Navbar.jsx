import { Link } from "react-router-dom";
import { BsPersonCircle, BsCardChecklist } from "react-icons/bs";
import { ImCross, ImUserPlus, ImHome3, ImCart } from "react-icons/im";
import FaOpencart from "../../assets/images/carticon.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { UserContext } from "../../contexts/UserContext.js";
import { CartContext } from "../../contexts/CartContext.js";

const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const { user, setUser } = useContext(UserContext);
    const { cartQuantity } = useContext(CartContext);

    const logout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        setUser({});
        window.location.href = "/";
    };

    return (
        <nav className="Navbar">
            <ul className="menu">
                {isAuthenticated ? (
                    <>
                        <Link to="/user/profile">
                            <li className="menu-container">
                                <BsPersonCircle className="nav-icon" />
                                <span>{user.firstname}</span>
                            </li>
                        </Link>
                        <a href="#">
                            <li className="menu-container">
                                <ImCross className="nav-icon red" onClick={logout} />
                                <span>Logout</span>
                            </li>
                        </a>
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <li className="menu-container">
                                <BsPersonCircle className="nav-icon" />
                                <span>Login</span>
                            </li>
                        </Link>
                        <Link to="/register">
                            <li className="menu-container">
                                <ImUserPlus className="nav-icon" />
                                <span>Inscription</span>
                            </li>
                        </Link>
                    </>
                )}
                <Link to="/">
                    <li className="menu-container">
                        <ImHome3 className="nav-icon" />
                        <span>Accueil</span>
                    </li>
                </Link>
                <Link to="/">
                    <li className="menu-container">
                        <BsCardChecklist className="nav-icon" />
                        <span>Catégories</span>
                    </li>
                </Link>
                <Link to="/panier">
                    <li className="menu-container">
                        <ImCart className="nav-icon" />
                        <span>Panier</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
