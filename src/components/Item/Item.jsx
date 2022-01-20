import { Link } from "react-router-dom";
import strLimit from "../../services/services.js";
import Button from "../Button/Button.jsx";
import { FaOpencart } from "react-icons/fa";
import "./Item.css";

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={`images/${item.image}`} alt={item?.name} className="image" />
            <div className="infos">
                <h2>{item.name}</h2>
                <p>
                    {strLimit(item.description)}
                    <Link to={`/services/${item.id}`}></Link>
                </p>
                <p className="price">{item.price} €</p>
                <div className="button-container">
                    <Button text="Voir Plus" />
                    <FaOpencart className="addToCart" />
                </div>
            </div>
        </div>
    );
};
export default Item;
