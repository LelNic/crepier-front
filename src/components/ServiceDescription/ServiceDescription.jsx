import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Hero from '../Hero/Hero';
import './ServiceDescription.css';

const ServiceDescription = () => {
  const [dataService, setDataService] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/services/${id}`)
      .then(({ data }) => setDataService(data));
  }, []);

  return (
    <div className="serviceDescription" id="serviceDescription">
      <Hero
        className="serviceHero"
        title={dataService.name}
        image={dataService.image}
      />
      <div className="infos-serviceDescription">
        <p>Durée de la prestation: {dataService.time}</p>
        <p>Prix: {dataService.price}</p>
        <p className="description">{dataService.description}</p>
      </div>
    </div>
  );
};

export default ServiceDescription;
