import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.imageUrl} alt={car.make} className="car-image" />
          <div className="car-info">
            <h3 className="car-price">${car.price}</h3>
            <p className="car-title-year">{car.year} {car.make} {car.model}</p>
            <p className="car-body-type">Body Type: {car.bodyType}</p>
            <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
};

export default CarCard;
