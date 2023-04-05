const express = require('express');
const cors = require('cors');
const mysql= require('mysql2');
const app = express();

const cars = [{model, year, make, price}];
let state = {
  filteredCars: cars,
};

app.get('/cars', (req, res) => {
  res.json(state.filteredCars);
});

app.post('/filter', (req, res) => {
  const searchQuery = req.body.searchQuery.toLowerCase();
  const filteredCars = cars.filter(car => {
    const make = car.make.toLowerCase();
    const model = car.model.toLowerCase();
    return make.includes(searchQuery) || model.includes(searchQuery);
  });
  state = {
    ...state,
    filteredCars: filteredCars,
  };
  res.sendStatus(200);
});

