import React from 'react';
import { Link } from 'react-router-dom';

const Heading = () => {
  return (
    <div className="gradient-container">
        <div className="container">
      <div className="gradient-s-shape-top"></div>
      <div className="gradient-s-shape-bottom"></div>
      <div className="gradient-content">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center flex-grow-1 py-2">
            <img src="/logo1.png" alt="Logo" style={{height: '100px', marginTop: '-0.5rem', marginBottom: '-0.5rem'}} className="me-2" />
            <h5 className="header m-0 text-lg-start text-center flex-grow-1">
              <strong className="d-block d-md-inline small">JUDGES AND MAGISTRATES ASSOCIATION OF TANZANIA</strong>
            </h5>
          </div>
          <div className="d-none d-lg-flex align-items-center me-2">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-2 me-md-4">
                <Link to="/register" className="text-decoration-none text-dark"><b>Members Portal</b></Link>
              </li>
              <li className="list-inline-item">
                <Link to="/login" className="text-decoration-none text-dark">
                 <b> <i className="fas fa-user me-1"></i>Login</b>
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex d-lg-none">
            <button
              className="btn btn-outline-light mx-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
              aria-controls="mobileSidebar"
            >
              <i className="fa-solid fa-bars-staggered fs-4"></i>
            </button>
          </div>
        </div>
      </div>
    
        </div>
    </div>
  );
};

export default Heading;