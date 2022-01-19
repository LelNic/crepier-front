import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Hero from "../Hero/Hero";
import "./ItemSingle.css";

const ItemSingle = () => {
  const [dataCrepe, setDataCrepe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${id}`).then(({ data }) => setDataCrepe(data));
  }, [id]);

  return (
    <div className="itemSingle" id="itemSingle">
      <Hero className="serviceHero" title={dataCrepe.name} image={dataCrepe.image} />
      <div className="infos-itemSingle">
        <p>Durée de la prestation: {dataCrepe.time}</p>
        <p>Prix: {dataCrepe.price}</p>
        <p className="description">{dataCrepe.description}</p>
      </div>
    </div>
  );
};

export default ItemSingle;
