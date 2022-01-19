import React from 'react';
import ServiceCard from './../../components/ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Services.css';

const Services = () => {
  const [dataService, setDataService] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/services')
      .then(({ data }) => setDataService(data));
  }, []);

  return (
    <div className="Services-page">
      <h1>Prestations</h1>
      <div className="div-servicecard">
        {dataService?.map((service) => (
          <ServiceCard key={service.id} data={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
