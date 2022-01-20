import { useState } from "react";
import axios from "axios";

const Login = () => {
    const url = "http://localhost:5000/security/login";
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            const user = { email: email, password: password, firstname: firstname };
            axios.post(url, user).then(({ data }) => {
                if (data.error) setError(data.error);
                else {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    window.location.href = "/user/profile";
                }
            });
        } else {
            setError("Veuillez entrez l'email et le mot de passe");
        }
    };

    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {error && <p>{error}</p>}
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Se Connecter</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
