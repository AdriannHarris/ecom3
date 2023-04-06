import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    axios.get(`/api/cars?searchQuery=${searchQuery}`)
      .then(res => setCars(res.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [searchQuery]);

  return (

      <input type="text" placeholder="Search cars..."></input>
  )}
