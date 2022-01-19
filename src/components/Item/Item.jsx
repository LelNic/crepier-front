import React from "react";
import "./Item.css";

const Item = ({ name }) => {
    return (
        <li className="item">
            <h2>{name}</h2>
        </li>
    );
};

export default Item;
