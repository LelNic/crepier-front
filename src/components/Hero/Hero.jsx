import './Hero.css';

const Hero = ({ title, image }) => {
  return (
    <div className="Hero" style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Hero;
