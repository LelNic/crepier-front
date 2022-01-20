import disco from "../../assets/images/discoCrepe.png";
import logo from "../../assets/images/discoboule.png";
import "./Home.css";

const Home = () => {
    return (
        <section className="Home">
            <img src={disco} alt="Logo de disco crêpe" className="logo" />
            <h2>La crêpe Festive</h2>
            <img src={logo} alt="Logo du site Disco Crêpe" className="logoHome" />
        </section>
    );
};

export default Home;
