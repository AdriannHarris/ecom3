const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecomv2'
  ,});

    db.connect(err =>{
    if(err){
      console.log(err.message)
      return;
  }
  console.log("Connected to MySQL database")
});

app.get("/products", (req, res) => {
  const q = "SELECT * FROM ecomv2";
  db.query(q, (err, data) => {
   if (err) {
    console.log(err);
    return res.json(err);
   }
   return res.json(data);
  });
 });

//  app.post("/products", (req, res) => {
//   const q = "INSERT INTO products(`product_title`, `product_description`, `product_price`, `product_image`) VALUES (?)";
 
//  const values = [
//   req.body.product_title,
//   req.body.product_price,
//   req.body.product_description,
//   req.body.product_image,
//  ];

//  db.query(q, [values], (err, data) => {
//   if (err) return res.send(err);
//   return res.json(data);
//  });
// });
app.listen(3001, () => {
 console.log("Connected to backend.");
});