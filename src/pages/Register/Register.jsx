import axios from "axios";
import React, { useState } from "react";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const deleteMessage = () => {
        setMessage("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === verifyPassword) {
            axios.post("http://localhost:5000/security/register", {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
                phone: phone,
                birthdate: birthdate,
            });
            setMessageType("success");
            setMessage("Votre inscription a bien été prise en compte");
            setTimeout(deleteMessage, 5000);
        } else {
            setMessageType("alert");
            setMessage("Vos mots de passe sont différents");
            setTimeout(deleteMessage, 5000);
        }
    };
    return (
        <div className="Register">
            <h1>Inscription</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Prénom" onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Nom de famille" onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
                <input
                    type="password"
                    placeholder="Vérifier le mot de passe"
                    onChange={(e) => setVerifyPassword(e.target.value)}
                />
                <input type="tel" placeholder="Téléphone" onChange={(e) => setPhone(e.target.value)} />
                <input type="date" placeholder="Date de naissance" onChange={(e) => setBirthdate(e.target.value)} />
                <button type="submit">Inscription</button>
            </form>
            {message !== "" ? <div className={`created ${messageType}`}>{message}</div> : ""}
        </div>
    );
};

export default Register;
