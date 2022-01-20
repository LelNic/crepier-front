import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Header.css";

const Header = () => {
    const [search, setSearch] = useState();
    const [crepes, setCrepes] = useState();

    useEffect(() => {
        axios
            .post("http://localhost:5000/crepes/search", {
                name: search,
            })
            .then(({ data }) => setCrepes(data.slice(0, 5)));
    }, [search]);

    const handleReset = () => {
        setCrepes([]);
    };

    return (
        <header className="Header">
            <input type="text" placeholder="Rechercher" className="search" onChange={(e) => setSearch(e.target.value)} />
            <div className="suggestions">
                {crepes
                    ? crepes.map((c) => (
                          <Link to={`/single/${c.id}`} onClick={handleReset}>
                              <p className="crepe-item">{c.name}</p>
                          </Link>
                      ))
                    : ""}
            </div>
        </header>
    );
};

export default Header;
