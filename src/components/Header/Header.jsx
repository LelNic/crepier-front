import React from "react";
import disco from "../../assets/images/discoCrepe.png";
import { HiDotsHorizontal } from "react-icons/hi";
import "./Header.css";

const Header = () => {
    return (
        <header className="Header">
            <img src={disco} alt="Logo de disco crêpe" className="logo" />
            <input type="text" placeholder="Rechercher" className="search" />
            <HiDotsHorizontal className="settings" />
        </header>
    );
};

export default Header;
