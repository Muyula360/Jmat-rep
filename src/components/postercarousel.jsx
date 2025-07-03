import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img/carousel.JPG';
import img2 from '../assets/img/habari.JPG';

const PostersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [img1, img2];
  const intervalDuration = 10000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalDuration);
    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <div className="position-relative">
      <div className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {images.map((img, index) => (
            <div  key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`} >
              <img src={img} className="d-block w-100 blur-carousel" alt={`Background ${index + 1}`}  />
            </div>
          ))}
        </div>
      </div>

      <div className="position-absolute top-50 start-50 translate-middle shadow-lg rounded overflow-hidden custom-shadow front-carousel">
        <img  src={images[activeIndex]} className="img-fluid w-100 h-100 object-fit-cover" style={{ objectPosition:'top' }} alt={`Foreground ${activeIndex + 1}`}
        />
      </div>

      {/* Navigation Controls */}
      <button className="carousel-control-prev" onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}>
         <i className="bi bi-caret-left-fill fs-1 text-white"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
         <i className="bi bi-caret-right-fill fs-1 text-white"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default PostersCarousel;
