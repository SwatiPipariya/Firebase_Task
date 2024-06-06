import React from 'react';
import './Carousel.css';
import wall from "../Assets/Image 40.png"
import wing from "../Assets/Image 39.png"
import desh from "../Assets/pexels-pixabay-164455@2x.png"
import bard from "../Assets/pexels-max-vakhtbovych-6782342.png"

const Carousel = () => {
    const items = [
        {
            imgSrc: bard, // Update with your image paths
            title: 'Modern Wall Decor Framed Painting',
            price: '$199.99',
            rating: 5,
        },
        {
            imgSrc: wall, // Update with your image paths
            title: 'Modern Wall Decor Framed Painting',
            price: '$199.99',
            rating: 5,
        },
        {
            imgSrc: wing,
            title: 'Modern Wall Decor Framed Painting',
            price: '$199.99',
            rating: 5,
        },
        {
            imgSrc: desh,
            title: 'Modern Wall Decor Framed Painting',
            price: '$199.99',
            rating: 5,
        },


        // Add more items as needed
    ];

    return (
        <div className="carousel">
            {items.map((item, index) => (
                <div key={index} className="carousel-item">
                    <img src={item.imgSrc} alt={item.title} className="carousel-image" />
                    <div className="carousel-details">
                        <h3 className="carousel-title">{item.title}</h3>
                        <div className='qklcr'>
                            <div className="carousel-price">{item.price}</div>
                            <div className="carousel-rating">{'★'.repeat(item.rating)}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
