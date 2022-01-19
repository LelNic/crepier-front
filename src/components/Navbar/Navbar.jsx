import { GiYinYang } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { GoHome } from 'react-icons/go';
import { BsShop, BsPersonCircle, BsCalendarDate } from 'react-icons/bs';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <GiYinYang className="logo" />
      <ul className="menu">
        <Link to="/About" className="nav-icon">
          <li>
            <BsPersonCircle />
            <span className="nav-text">A Propos</span>
          </li>
        </Link>
        <Link to="/services">
          <li>
            <BsShop className="nav-icon" />
            <span className="nav-text">Prestations</span>
          </li>
        </Link>
        <Link to="/" className={`mobile`}>
          <li>
            <GoHome className="nav-icon" />
            <span className="nav-text">Accueil</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <BsCalendarDate className="nav-icon" />
            <span className="nav-text">Rendez-Vous</span>
          </li>
        </Link>
        <Link to="/contact">
          <li>
            <AiOutlinePhone className="nav-icon" />
            <span className="nav-text">Contact</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
