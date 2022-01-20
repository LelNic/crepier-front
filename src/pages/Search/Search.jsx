import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Item from "../../components/Item/Item";
import "./Search.css";

const Search = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/crepes").then(({ data }) => setItems(data));
    }, []);

    return (
        <div className="Search">
            <ul>
                {items.map((i) => (
                    <li>{<Item key={i.id} item={i} />}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
