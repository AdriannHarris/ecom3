import React from 'react';
import './car.css';

function Car ({year, make, model, price,description, image,  onReserve}){
 
    
    return (
        <div className="car">
            <li className="crop">
                <h2>{year} {make} {model}</h2>
                <p>${price}</p>
                <p>{description}</p>
                <img src={image} alt={`${make} ${model}`} />
   
                </li>
            <button type="button" onClick={onReserve}>Reserve</button>
            
        </div>
    
    
    )
      
      
}

export default Car;

