import React from 'react';

const Members = () => {
  return (
    <div className="container mt-5">
      <div className="row gap-5 justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm mx-4 pt-2">
            <div className="card-body text-center">
              <h6 className='fw-bold pb-0'>TOTAL MEMBER</h6>
              <i className="fa-solid fa-people-roof visit-icon pb-2 pt-1"></i>
              <h3 className='fw-bold'>605</h3>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm mx-4 pt-2">
            <div className="card-body text-center">
              <h6 className='fw-bold pb-0'>ACTIVE MEMBER</h6>
              <i className="fa-solid fa-people-group visit-icon pb-2 pt-1"></i>
              <h3 className='fw-bold'>400</h3>
            </div>
          </div>
        </div>

       <div className="col-md-3 mb-4">
          <div className="card h-100 shadow-sm mx-4 pt-2">
            <div className="card-body text-center">
              <h6 className='fw-bold pb-0'>INACTIVE MEMBER</h6>
              <i className="fa-solid fa-people-line visit-icon pb-2 pt-1"></i>
              <h3 className='fw-bold'>205</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
