import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
  
const Carousel1= () => {
  return (
    <div style={{ display: 'block', width: 1300, height: 700, padding: 10 }}>
      
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
src="/images/car4.jpg"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Rent Car- Luxury cars at less</h3>
            <p>Rent our luxury cars at cheapest price</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
src="/images/car1.jpg"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Rent Car- Enjoiy your holidays whith our wheels</h3>
            <p>Make your holidays memeorable</p>
          </Carousel.Caption>
        </Carousel.Item>
      {/* </Carousel> */}
      <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
src="/images/car5.jpg"
            alt="Image Three"
          />
          <Carousel.Caption>
            <h3>Rent Car- We make your ride adventerous</h3>
            <p>Make your trip more adventerous</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}
export default Carousel1;