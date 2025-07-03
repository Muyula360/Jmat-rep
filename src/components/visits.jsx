import React from 'react';

const Visits = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3 col-6 mb-4 text-center py-3">
              <h6 className='fw-bold py-1'>Daily Visits</h6>
              <i className="fa-solid fa-people-roof text-white visit-icon pb-2 pt-1"></i>
              <h3 className='fw-bold'>605</h3>
        </div>

        <div className="col-md-3 col-6 mb-4 text-center py-3">
              <h6 className='fw-bold py-1'>Weekly Visits</h6>
              <i className="fa-solid fa-people-group text-white visit-icon pb-2 pt-1"></i>
              <h3 className='fw-bold'>400</h3>
        </div>

        <div className="col-md-3 col-6 mb-4 text-center py-3">
              <h6 className='fw-bold py-1'>Monthly Visit</h6>
              <i className="fa-solid fa-people-group text-white visit-icon pb-2 pt-1"></i>
              <h3 className='fw-bold'>400</h3>
        </div>

       <div className="col-md-3 col-6 mb-4 text-center py-3">
              <h6 className='fw-bold yb10'>Total Visits</h6>
              <i className="fa-solid fa-people-line visit-icon text-white pb-2 pt-1"></i>
              <h3 className='fw-bold'>205</h3>
       
        </div>
      </div>
    </div>
  );
};

export default Visits;
