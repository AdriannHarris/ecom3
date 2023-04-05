import React, { useState } from 'react';
import Car from '../components/Car';
import './car.css'

function Card ()  {


const [cars, setCars] = useState ([
  {
    year: '2018',
    make: 'Chaverolet',
    model: 'Camaro ZL1 1LE',
    price: '$57,998',
    image:'https://www.motortrend.com/uploads/sites/21/2020/01/002-2018-Chevy-Camaro-Street-Track-Car_1_1.jpg',
    description: 'With With the 2018 6th generation Camaro silhouette, you get 810 horsepower, white exterior with carbon fiber details on the hood, truck and bumper, all black leather interior, and custom JDI sri coilovers.',
    
  },
  {
    year: '2015',
    make: 'Dodge',
    model: 'Challenger',
    price: '45,695',
    image:'https://cdn.dealeraccelerate.com/volo/1/19301/660995/790x1024/2015-dodge-challenger-srt-hellcat',
    description: 'This 8 speed automatic that weighs 4,478 lbs, you get 475 rpm torque, has black hybrid interior which is a mix of leather and suede with SRT stitched in the seats, with a black glossy exterior and 20" inch aluminum wheels.',
  },
  {
    year: '2015',
    make: 'Ford',
    model: 'Mustang GT',
    price: '$46,430',
    image: 'https://www.speednik.com/image/2016/02/2016-02-12_20-12-24.jpg',
    description:'This rear wheel drive 6 speed manual has 435 horsepower, cooled and heated seats, navigation screen, with a all bright blue exterior, and an all black interior with a large spoiler.',
  },
  {
    year: '2020',
    make: 'Lexus',
    model: 'RC F 350',
    price: '$65,925',
    image: 'https://www.cnet.com/a/img/resize/f026b71c6fff8e7cbf625490cb213370500b14d9/hub/2019/04/04/7a4e91ca-9438-43b3-95d1-999f53dcb3ad/2020-lexus-rc-f-3981.jpg?auto=webp&fit=crop&height=675&width=1200',
    description: 'This luxury style sports coupe features plenty of cabin room, 472 horsepower, 395 lb torque, with an all black interior and silver exterior.',
  },
  {
    year: '2017',
    make: 'Mercedes',
    model: 'Benz AMG',
    price: '$132,195',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMOksnGwmOJXgDtHMBUIp3RKHBlyKvst-jg&usqp=CAU',
    description: 'This twin turbo RWD v8 engine vehicle includes 503 horsepower, 479 maximum torque, 7 speed transmission, black interior with a large navigation screen, and dark silver exterior.',
  },
  {
    year: '2018',
    make: 'Toyota',
    model: 'Camry SE',
    price: '$17,594',
    image: 'https://dealerimages.dealereprocess.com/image/upload/1490791.jpg',
    description: 'This 8 speed automatic FWD vehicle includes 203 horsepower, 184lb torque, 4 cylinders, and low rac car driver seats.',
  },
  {
    year: '2007',
    make: 'Ford',
    model: 'Mustang GT',
    price: '$6,400',
    image: 'https://bringatrailer.com/wp-content/uploads/2020/11/2007_ford_mustang_gt_roush_stage_3_1607997436712650f85ffIMG_4560.jpg?fit=940%2C625',
    description: 'This fifth generatio v8 vintage coupe includes 300 horsepower, 320lb torque, suspension coiling springs, and spectator goggle headlights.',
  },
  {
    year: '2016',
    make: 'Audi',
    model: 'R8 V10',
    price: '$158,600',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQaXJLU9b-fgFzAKzUQ9WmpHojhYWANmKNFQ&usqp=CAU',
    description: 'This standard 5.2 liter v10 model gets 540 horsepower, 398lb torque, a 7 speed wet dual clutch automatic, three different modes,and a variety of colors.',
  },
  {
    year: '2016',
    make: 'Dodge',
    model: 'Charger 392 SRT',
    price: '$50,995',
    image: 'https://www.momentummotorcars.com/imagetag/1131/main/l/Used-2017-Dodge-Charger-SRT-392-1626805391.jpg',
    description: 'his incredible 8 speed RWD automatic sedan includes 485 horsepower, 475lb torque, overhead valve cams, custom srt stitched seats, with a large cabin and a variety of colors.',
  },
  {
    year: '2022',
    make:'Kia',
    model: 'K5 GT Line',
    price: '$28,390',
    image: 'https://hips.hearstapps.com/hmg-prod/images/2021-kia-k5-gt-line-108-1602778023.jpg?crop=0.660xw:0.495xh;0.0112xw,0.476xh&resize=1200:*',
    description: 'This 1.6 turbocharged 8 speed automatic vehicle includes three different drive modes,GT line body styling, 10.25 touchscreen display, blind spot detection tech, and comes in a variety of colors.',
  },
  {
    year: '2020',
    make: 'Cheverolet',
    model: 'Corvette Z06',
    price: '$60,000',
    image: 'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2022/02/28131500/2023_corvette_z063.jpg',
    description: 'This 5.5 liter v8 RWD luxury sport coupe includes 8 speed dual clutch, 670 horsepower, 470lb torque, and a sleek sporty silhouette.',
  },
  {
    year: '2011',
    make: 'Porsche',
    model: 'Panamera GTS',
    price: '$17,312',
    image: 'https://www.carscoops.com/wp-content/uploads/2011/11/Porsche-Panamera-GTS-Carscoop12.jpg',
    description: 'This v8 4.8 liter AWD drive vehicle includes 430 horsepower, with a maximum of 384lbs,a sporty silhouette, and premium interior.',
  }
]);
const [filteredCars, setFilteredCars] = useState(cars);

const handleFilter = (event) => {
  const searchQuery = event.target.value.toLowerCase();
  const filtered = cars.filter(car => {
    const make = car.make.toLowercase();
    const model = car.model.toLowercase();
    return make.includes(searchQuery) || model.includes(searchQuery);
  });
  setFilteredCars(filtered);
}



  return (
 
  
  <>
  <h1>Cars for Sale</h1>
  <imput type="text" placeholder="Search cars..." onChange={handleFilter} />
  <div id="grid">
  {filteredCars.map(car => (
    <Car 
    key={`${car.make}-${car.model}`}
    year={car.year}
    make={car.make}
    model={car.model}
    price={car.price}
    image={car.image}
    decription={car.description}
    onReserve={() => alert('Reserved.')}
    />
  ))}
  
  </div> 
  </>
  )
};



export default Card;

