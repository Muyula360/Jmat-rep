import React, { useState, useEffect } from 'react';
import sampleImage from '../assets/img/CCA-Geita-1 (1) (1).jpg';
import anotherImage from '../assets/img/0F6A0845.jpeg';
// import './EventsGalleryCarousel.css'; // Import custom styles

const EventsGalleryCarousel = () => {
  const carouselItems = [
    {
      id: 1,
      text: 'We strive to uphold excellence in all our judicial undertakings. Our mission is centered around fairness, integrity, and transparency as we serve the people of Tanzania.',
      image: sampleImage,
    },
    {
      id: 2,
      text: 'Through our events and engagements, we build strong judicial collaboration and continuously improve service delivery.',
      image: anotherImage,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [captionVisible, setCaptionVisible] = useState(true);

  const goToNext = () => {
    setCaptionVisible(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
      setCaptionVisible(true);
    }, 500); // Match with transition duration
  };

  const goToPrev = () => {
    setCaptionVisible(false);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
      setCaptionVisible(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="container mb-5">
      <div className="card gallery-card border-0">
        <div className="row g-0 align-items-stretch mt-5">
          {/* Left Column */}
          <div className="col-md-4 d-flex flex-column justify-content-between p-4">
            <h5 className="text-center fw-bold py-3">EVENTS GALLERY</h5>
            <div>
              <p className={`mb-4 pt-5 px-3 text-dark text-justify caption-fade ${captionVisible ? 'show' : ''}`}>
                {carouselItems[activeIndex].text}
              </p>
            </div>
            <div className="d-flex justify-content-between mt-auto pb-5 px-5">
              <span onClick={goToPrev}>
                <i className="bi bi-arrow-left fs-1 fw-bold arrows-icon cursor-pointer"></i>
              </span>
              <span onClick={goToNext}>
                <i className="bi bi-arrow-right fs-1 fw-bold arrows-icon cursor-pointer"></i>
              </span>
            </div>
          </div>

          {/* Right Column with Image */}
        <div className="col-md-8 pb-4 pe-md-0">
  <div className="shadow rounded custom-shadow overflow-hidden h-100 position-relative">
    {carouselItems.map((item, index) => (
      <img
        key={item.id}
        src={item.image}
        className={`w-100 position-absolute top-0 start-0 transition-slide ${index === activeIndex ? 'active' : ''}`}
        alt={`Event ${index + 1}`}
        style={{ height: '380px', objectFit: 'cover' }}
      />
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default EventsGalleryCarousel;
