// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BsFillBagCheckFill } from "react-icons/bs";
import "./ItemSingle.css";
import Stars from "../../components/Stars/Stars";

const ItemSingle = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/crepes/${id}`).then(({ data }) => setItem(data));
    }, [id]);

    return (
        <div className="ItemSingle">
            <img src={`../images/${item.image}`} alt={item.name} />
            <div className="infos">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Stars />
                <div className="CartButton">
                    <span className="price">{item.price} €</span>
                    <BsFillBagCheckFill className="addToCart" />
                </div>
            </div>
        </div>
    );
};

export default ItemSingle;
