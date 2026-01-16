import React, { useState, useEffect } from 'react';
import './image-carousel-vert_styles/image-carousel-vert.css';

const ImageCarouselVert = ({ images, interval = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);

  }, [interval]);

  return (
    <div className="carousel-container-vert">
      <button onClick={prevSlide} className="carousel-btn prev-btn">
        &#10094;
      </button>

      <div className="carousel-slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-btn next-btn">
        &#10095;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselVert;
