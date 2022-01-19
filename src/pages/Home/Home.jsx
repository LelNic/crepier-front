import HomeItem from "../../components/HomeItem/HomeItem";
import { GiForkKnifeSpoon, GiYinYang, GiRunningShoe, GiFallingLeaf } from "react-icons/gi";
import { CgMouse } from "react-icons/cg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="Home">
        <h1 className="homeTitle">Cynthia Diefenbronn</h1>
        <span className="job">Thérapeute en Nutrition Santé et Naturopathie</span>
        <CgMouse class="scroll" />
      </section>
      {/* <section>{articles.map((a) => a)}</section> */}
      <section className="items">
        <h2>Mes Spécialités</h2>
        <HomeItem title="Naturopathie" slug="naturopathie" text="blablabla" icon={<GiFallingLeaf />} />
        <HomeItem title="MicroNutrition" slug="micronutrition" text="blablabla" icon={<GiForkKnifeSpoon />} />
        <HomeItem title="Accompagnement Sportif" slug="accompagnement-sportif" text="blablabla" icon={<GiRunningShoe />} />
        <HomeItem title="Diétothérapie" text="blablabla" icon={<GiYinYang />} />
      </section>
    </>
  );
};

export default Home;
