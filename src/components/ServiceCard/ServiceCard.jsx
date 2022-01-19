import { Link } from 'react-router-dom';
import strLimit from '../../services/services.js';
import './ServiceCard.css';
import Button from './../Button/Button';

const ServiceCard = ({ data }) => {
  return (
    <div className="ServiceCard">
      <img className="img-service-card" src={data.image} alt={data.name} />
      <h2 className="h2-service-card">{data.name}</h2>
      <p className="description">
        {strLimit(data.description)}
        <Link to={`/services/${data.id}`}>
          <span className="link-service-card">Afficher plus...</span>
        </Link>
      </p>
      <div className="items-service-card">
        <p className="time">{data.time}</p>
        <p className="price">{data.price}</p>
      </div>
      <Button text="Réserver" />
    </div>
  );
};

export default ServiceCard;
