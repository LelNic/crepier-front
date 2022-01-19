// import { Link } from "react-router-dom";
import React from "react";
import "./Item.css";
import Button from "./../Button/Button";

const Item = ({ name, shortDescribe, price, image }) => {
  return (
    <div>
      <li className="item">
        <h2>{name}</h2>
        <h3>{image}</h3>
        <h3>{shortDescribe}</h3>
        <h3>{price}</h3>
      </li>
      {/* <Link to={`/services/${data.id}`}>
          <span className="link-service-card">Afficher plus...</span>
        </Link> */}
      <Button text="Commander la crepe" />
    </div>
  );
};

export default Item;
