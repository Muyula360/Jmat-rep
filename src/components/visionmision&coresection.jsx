import React from 'react';

const MissionVisionCore = () => {
  return (
    <div className="container my-5">
        <h5 className='text-center fw-bold py-3 mb-4' style={{ color: '#B30000' }}>OUR GUIDING PRINCIPLES</h5>
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card custom-shadow h-100 border-0">
            <div className="card-body">
              <h5 className="card-title text-dark text-start fw-bold px-3"><i className="bi bi-bullseye me-2 fs-4 py-0"  style={{ color: '#DCD508' }}></i>Mission</h5>
              <p className="card-text text-justify">
                To promote professionalism, independence, and integrity of judges and magistrates in Tanzania through advocacy, collaboration, and capacity building.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card custom-shadow h-100 border-0">
            <div className="card-body">
              <h5 className="card-title text-dark text-start fw-bold px-3"><i className="bi bi-eye-fill me-2 fs-4 py-0"  style={{ color: '#DCD508' }}></i>Vision</h5>
              <p className="card-text text-justify">
                A just and accountable judiciary that upholds the rule of law, human rights, and justice for all Tanzanians.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card custom-shadow h-100 border-0">
            <div className="card-body">
            <h5 className="card-title text-dark text-start fw-bold px-3"><i className="bi bi-gem me-2 fs-4 py-0 "  style={{ color: '#DCD508' }}></i>Core Values</h5>
            <ul className="list-unstyled text-start mb-0">
                <li><i className="bi bi-check2-circle text-primary me-2"></i>Integrity</li>
                <li><i className="bi bi-check2-circle text-primary me-2"></i>Professionalism</li>
                <li><i className="bi bi-check2-circle text-primary me-2"></i>Transparency</li>
                <li><i className="bi bi-check2-circle text-primary me-2"></i>Justice</li>
                <li><i className="bi bi-check2-circle text-primary me-2"></i>Collaboration</li>
            </ul>

            </div>
          </div>
        </div>
      </div>
        <div className="d-flex justify-content-center my-4 py-2">
          <button className="btn btn-danger px-4 py-2">
             Join our Journey <i className="bi bi-arrow-right ms-2"  style={{ transform: 'scaleX(2.2)', display: 'inline-block' }}></i>
          </button>
        </div>
    </div>
  );
};

export default MissionVisionCore;
