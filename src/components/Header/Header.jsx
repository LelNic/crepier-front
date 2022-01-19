import React from "react";
import "./Header.css";
import disco from "../../assets/images/discoCrepeLogo.png";

const Header = () => {
  return (
    <header>
      <img src={disco} alt="Logo de disco crêpe" />
      <div>Disco Crêpe</div>
    </header>
  );
};

export default Header;
