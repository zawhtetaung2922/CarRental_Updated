import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "./PeopleChoice.css";

const PeopleChoice = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await fetch("http://localhost:5001/people-choice");
                const data = await response.json();
                console.log(data);
                setCars(data);
            } catch (error) {
                console.error("Error fetching cars:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="people-choice">
            <h2 className="header">People's Choice</h2>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={true}
                showArrows={true}
                swipeable={true}
                emulateTouch={true}
                interval={3000}
                transitionTime={500}
            >

                {cars.map((car) => (
                    <div key={car.id} className="car-card">
                        <img src={car.image} alt={car.name} />
                        <div className="car-info">
                            <h3>{car.name}</h3>
                            <p>{car.type}</p>
                            <h4>{car.price} ks/day</h4>
                        </div>
                        <button className="details-button">See Details</button>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default PeopleChoice;
