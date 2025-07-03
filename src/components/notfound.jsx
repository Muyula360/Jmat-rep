import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center text-center bg-light" style={{ height: '80vh' }}>
      <div>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h4 className="mb-3 text-dark">Oops! Page Not Found</h4>
        <p className="mb-4 text-secondary">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-danger px-4">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
