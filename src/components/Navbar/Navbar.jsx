import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { ImCross, ImUserPlus } from "react-icons/im";
import FaOpencart from "../../assets/images/carticon.png";
import logo from "../../assets/images/discoBoule.png";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext.js";
import { UserContext } from "../../contexts/UserContext.js";

const Navbar = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const { user, setUser } = useContext(UserContext);

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
                        <ImCross className="nav-icon red" onClick={logout} />
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
                <Link to="/" className={`mobile`}>
                    <li>
                        <img src={logo} alt="Logo du site Disco Crêpe" className="logoHome" />
                    </li>
                </Link>
                <Link to="/" className={`mobile`}>
                    <li>
                        <img src={FaOpencart} alt="picturecartpng" className="nav-icon-cart" />
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
