import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Search = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/crepes").then(({ data }) => setItems(data));
  }, []);
  console.log("briochette", items);
  return <div className="Search"></div>;
};

export default Search;
