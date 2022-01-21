import axios from "axios";
import { useState, useEffect } from "react";
import "./Adresses.css";

const Adresses = () => {
    const [adresses, setAdresses] = useState([]);
    const [type, setType] = useState("");
    const [number, setNumber] = useState("");
    const [lane, setLane] = useState("");
    const [LaneName, setLaneName] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");

    console.log(adresses.length);

    useEffect(() => {
        axios.get("http://localhost:5000/adresses").then(({ data }) => setAdresses(data));
    }, []);

    return (
        <div className="Adresses">
            {adresses.length !== 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Numéro</th>
                            <th>Voie</th>
                            <th>Libelé</th>
                            <th>Code Postal</th>
                            <th>Ville</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adresses.map((a) => (
                            <tr>
                                <td>{a.type}</td>
                                <td>{a.numero}</td>
                                <td>{a.lane}</td>
                                <td>{a.lane_name}</td>
                                <td>{a.zip}</td>
                                <td>{a.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "plop"
            )}

            <hr />
            <form>
                <input type="text" onChange={(e) => setType(e.target.value)} placeholder="Type" />
                <input type="number" onChange={(e) => setNumber(e.target.value)} placeholder="Numéro" />
                <input type="text" onChange={(e) => setLane(e.target.value)} placeholder="Voie" />
                <input type="text" onChange={(e) => setLaneName(e.target.value)} placeholder="Libellé" />
                <input type="number" onChange={(e) => setZip(e.target.value)} placeholder="Code Postal" />
                <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="Ville" />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default Adresses;
