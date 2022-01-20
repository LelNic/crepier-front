import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { BsTrash } from "react-icons/bs";
import { MdExposurePlus1 } from "react-icons/md";
import Services from "../../services/services.js";
import "./Cart.css";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [crepes, setCrepes] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/crepes").then(({ data }) => setCrepes(data));
    }, []);

    const crepesDatas = cart?.map((c) =>
        Object.assign(
            c,
            crepes.find((y) => y.id === c.id)
        )
    );

    const total = crepesDatas.reduce((acc, prev) => acc + prev.qty * prev.price, 0);

    return (
        <div className="Cart">
            <ul>
                {crepesDatas?.map((p) => (
                    <li className="cart-line">
                        <div className="infos">
                            {p.name} - {p.price} € total : {p.price * p.qty} €
                        </div>
                        <div className="button-container">
                            <BsTrash onClick={() => Services.removeFromCart(p.id)} className="trash" />
                            <input type="text" className="update-qty" value={p.qty} />
                            <MdExposurePlus1 className="plusOne" onClick={() => Services.addToCart(p.id, p.price)} />
                        </div>
                    </li>
                ))}
            </ul>
            <p className="total">Total : {total} €</p>
        </div>
    );
};

export default Cart;
