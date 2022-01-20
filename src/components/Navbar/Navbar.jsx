import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import  FaOpencart from "../../assets/images/carticon.png";
import logo from "../../assets/images/discoboule.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="Navbar">
            <ul className="menu">
                <Link to="/About">
                    <li className="menu-container">
                        <BsPersonCircle className="nav-icon" />
                        <span>Johnny</span>
                    </li>
                </Link>
                <Link to="/" className={`mobile`}>
                    <li>
                        <img src={logo} alt="Logo du site Disco Crêpe" className="logoHome" />
                    </li>
                </Link>
                <Link to="/" className={`mobile`}>
                    <li>
                        <img src={FaOpencart} alt="picturecartpng"className="nav-icon-cart" />
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default Navbar;
