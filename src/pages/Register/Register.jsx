import axios from 'axios';
import React, { useState } from 'react';

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
    setMessage("")
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/security/register", {firstName, lastName, email, password, verifyPassword, phone, birthdate});
    setMessageType("success");
    setMessage("Votre inscription a bien été prise en compte")
    setTimeout(deleteMessage,5000)
  }
  return (
  <div className="Register">
    <h1>Inscription</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" required placeholder="Prénom" OnClick={(e)=>setFirstName(e.target.value)}/>
      <input type="text" required placeholder="Nom de famille" OnClick={(e)=>setLastName(e.target.value)}/>
      <input type="email" required placeholder="Email" OnClick={(e)=>setEmail(e.target.value)}/>
      <input type="text" required placeholder="Mot de passe" OnClick={(e)=>setPassword(e.target.value)}/>
      <input type="text" required placeholder="Vérifier le mot de passe" OnClick={(e)=>setVerifyPassword(e.target.value)}/>
      <input type="tel" required placeholder="Téléphone" OnClick={(e)=>setPhone(e.target.value)}/>
      <input type="date" required placeholder="Date de naissance" OnClick={(e)=>setBirthdate(e.target.value)}/>
      <button type="submit">Inscription</button>
    </form>
    {message !== "" ? ( <div className={`created ${messageType}`}>{message}</div> ) : ("")}
  </div> 
  );
}
 
export default Register;