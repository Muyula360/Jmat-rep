import React from 'react';
import { Link } from 'react-router-dom'
import newsimage from '../assets/img/habari.JPG'
const EventsAndNews = () => {
  return (
    <div className="container-lg px-4 my-4">
      <div className="row align-items-stretch">
        <div className="col-md-5 mb-5 mb-md-0">
            <div className="card custom-shadow border-0 h-100">
              <div className="card-top-line ms-4"></div>
                <div className="card-body">
                  <h5 className='pt-2 px-1'><b>Announcements</b></h5>
                  <div className='mt-4 px-lx-5 px-2'>
                      <Link className='my-2 py-2 text-decoration-none text-dark custom-hover-card' to="">
                      <h6 className="fw-bold my-0">SEPT 12, 2025</h6>
                      <p className="mb-0  event-paragraph my-0">
                        A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                      </p>
                      <hr className="event-line mt-2" style={{ width:'30%'}} />
                    </Link>
                      <Link className='my-2 py-2 text-decoration-none text-dark custom-hover-card' to="">
                      <h6 className="fw-bold my-0">SEPT 12, 2025</h6>
                      <p className="mb-0  event-paragraph my-0">
                        A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                      </p>
                      <hr className="event-line mt-2" style={{ width:'30%'}} />
                    </Link>
                    <Link className='my-2 py-2 text-decoration-none text-dark custom-hover-card' to="">
                      <h6 className="fw-bold my-0">SEPT 12, 2025</h6>
                      <p className="mb-0  event-paragraph my-0">
                        A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                      </p>
                      <hr className="event-line mt-2" style={{ width:'30%'}} />
                    </Link>
                    <Link className='my-2 py-2 text-decoration-none text-dark custom-hover-card' to="">
                      <h6 className="fw-bold my-0">SEPT 12, 2025</h6>
                      <p className="mb-0  event-paragraph my-0">
                        A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                      </p>
                      <hr className="event-line mt-2" style={{ width:'30%'}} />
                    </Link>
                      <div className="d-flex justify-content-end my-4">
                        <Link to="/news" className="btn btn-danger px-4">
                          View All Events <i className="bi bi-arrow-right ms-2"  style={{ transform: 'scaleX(2.2)', display: 'inline-block' }}></i>
                        </Link>
                      </div>
                  </div>
                

            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card custom-shadow border-0 h-100 text-start d-flex">    
         <div className="card-top-line ms-4"></div>
            <div className="card-body">
               <h5 className='pt-2'>                 
                <b>Latest News and Events</b>
               </h5>
               <div className='mt-4 px-lg-1 px-2'>
                    <Link className="card custom-shadow  border-0 p-3 text-decoration-none text-dark custom-hover-card mb-2">
                      <div className="row g-0">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                          <img  src={newsimage}  alt="News Image" className="img-fluid rounded" style={{ maxHeight: '120px', objectFit: 'cover' }}  />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <p className="mb-0 event-paragraph">
                              A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                            </p>
                          </div>
                            <div className="card-footer bg-transparent border-0 pt-0 pb-2 px-lg-3 px-1">
                              <div className="d-flex justify-content-between small text-muted">
                                <span className="fst-italic">By Jumanne Mussa</span>
                                <span className="fst-italic d">Sept 25, 2024</span>
                              </div>
                            </div>
                        </div>
                      </div>
                    </Link>
                      <Link className="card custom-shadow  border-0 p-3 text-decoration-none text-dark custom-hover-card mb-2">
                      <div className="row g-0">
                        <div className="col-4 d-flex align-items-center justify-content-center">
                          <img  src={newsimage}  alt="News Image" className="img-fluid rounded" style={{ maxHeight: '120px', objectFit: 'cover' }}  />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <p className="mb-0 event-paragraph ">
                              A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                            </p>
                          </div>
                            <div className="card-footer bg-transparent border-0 pt-0 pb-2 px-3">
                              <div className="d-flex justify-content-between small text-muted">
                                <span className="fst-italic">By Jumanne Mussa</span>
                                <span className="fst-italic">Sept 25, 2024</span>
                              </div>
                            </div>
                        </div>
                      </div>
                    </Link>
                      <Link className="card custom-shadow  border-0 p-3 text-decoration-none text-dark custom-hover-card mb-2">
                      <div className="row g-0">
                        <div className="col-4 d-flex align-items-center justify-content-start">
                          <img  src={newsimage}  alt="News Image" className="img-fluid rounded" style={{ maxHeight: '120px', objectFit: 'cover' }}  />
                        </div>
                        <div className="col-8">
                          <div className="card-body  text-left">
                            <p className="mb-0 event-paragraph text-left">
                              A special seminar focusing on court administration reforms and case management tools for enhancing judicial efficiency.
                            </p>
                          </div>
                            <div className="card-footer bg-transparent border-0 pt-0 pb-2 px-3">
                              <div className="d-flex justify-content-between small text-muted">
                                <span className="fst-italic">By Jumanne Mussa</span>
                                <span className="fst-italic">Sept 25, 2024</span>
                              </div>
                            </div>
                        </div>
                      </div>
                    </Link>

                      <div className="d-flex justify-content-end my-4">
                        <Link to="/news" className="btn btn-danger px-4">
                          View All News <i className="bi bi-arrow-right ms-2 arrows-icon text-white"></i>
                        </Link>
                      </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsAndNews;
