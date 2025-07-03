import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../assets/img/carousel.JPG';
import img2 from '../assets/img/habari.JPG';

const PostersCarousel = () => {
  return (
  <div className="position-relative">
              <div id="simpleCarousel"  className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="11000" >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 carousel-img" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="d-block w-100 carousel-img" alt="Slide 2" />
                  </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#simpleCarousel" data-bs-slide="prev">
                <i className="bi bi-caret-left-fill fs-1 text-white"></i>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#simpleCarousel" data-bs-slide="next">
                <i className="bi bi-caret-right-fill fs-1 text-white"></i>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>

              <div
                className="position-absolute top-50 start-50 translate-middle text-white p-4"
                style={{
                  backgroundColor: 'transparent',
                  border: '3px solid white',
                  borderRadius: '8px',
                  zIndex: 1000,
                  textAlign: 'center',
                  width: '950px',
                  height: '400px'
                }}
              >
              </div>
              
            </div>
  );
};

export default PostersCarousel;
