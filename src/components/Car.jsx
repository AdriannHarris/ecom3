import React from 'react';
import './car.css';

function Car ({year, make, model, price, image, description, onReserve}){
    return (
        <div className="car">
            <li className="crop">
                <h2>{year} {make} {model}</h2>
                <p>Price: {price}</p>
                <img src={image} alt={`${make} ${model}`} />
                <p>{description}</p>
            </li>
            <button type="button" onClick={onReserve}>Reserve</button>
        </div>
    );
}

export default Car;

