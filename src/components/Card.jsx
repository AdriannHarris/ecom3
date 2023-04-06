import React, { useState } from 'react';
import Car from "../components/Car";
import { useEffect } from "react";
import axios from "axios";
import './car.css';
import cars from './cars.json';

// function Card ()  {


// const [cars, setCars] = useState

// const [filteredCars, setFilteredCars] = useState(cars);

// const handleFilter = (event) => {
//   const searchQuery = event.target.value.toLowerCase();
//   const filtered = cars.filter(cars => {
//     const make = cars.make.toLowercase();
//     const model = cars.model.toLowercase();
//     return make.includes(searchQuery) || model.includes(searchQuery);
//   });
//   setFilteredCars(filtered);
// }



//   return (
 
  
//   <>
//   <h1>Cars for Sale</h1>
//   <input type="text" placeholder="Search cars..." onChange={handleFilter} />
//   <div id="grid">
//   {filteredCars.map(car => (
//     <Car 
//     key={`${cars.make}-${cars.model}`}
//     id={cars.id}
//     year={cars.year}
//     make={cars.make}
//     model={cars.model}
//     price={cars.price}
//     image={cars.image}
//     decription={car.description}
//     onReserve={() => alert('Reserved.')}
//     />
//   ))}
  
//   </div> 
//   </>
//   )
// };

const Card = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
   const fetchAllProducts = async () => {
    try {
     const res = await axios.get("http://localhost:3001/products");
     setProducts(res.data);
    } catch (err) {
     console.log(err);
    }
   };
   fetchAllProducts();
  }, []);

  console.log(Products);
return (
  <div>
   <h1>Cars for Sale</h1>
   <div className="products-container">
    {Car.map((car) => (
     <div key={car.car_id} className="product-item">
      <img src={car.car_image} alt={car.car_title} />
      <div className="product-details">
       <h2>{car.car_title}</h2>
       <p>{car.car_description}</p>
       <span className="product-price">${car.car_price}</span>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};








export default Card;

