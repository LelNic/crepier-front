// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ItemSingle.css";
import Button from "./../Button/Button";
import { useParams } from "react-router-dom";
import axios from "axios";

const ItemSingle = () => {
  const [item, setItem] = useState([]);
  const [id] = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/crepes/${id}`).then(({ data }) => setItem(data));
  }, [id]);

  return (
    <div>
      <li className="item">
        <h2>{item.name}</h2>
        <h3>{item.image}</h3>
        <h3>{item.shortDescribe}</h3>
        <h3>{item.price}</h3>
      </li>
      {/* <Link to={`/services/${data.id}`}>
          <span className="link-service-card">Afficher plus...</span>
        </Link> */}
      <Button text="Commander la crepe" />
    </div>
  );
};

export default ItemSingle;
