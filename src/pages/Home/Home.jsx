import Item from "../../components/Item/Item";
import "./Home.css";

const Home = () => {
    return (
        <section className="Home">
            <h1>Disco Crêpe</h1>
            <h2>Site d'outilllage</h2>
            <ul>
                <Item name="Crêpe Suisse" />
                <Item name="Crêpe Belge" />
            </ul>
        </section>
    );
};

export default Home;
