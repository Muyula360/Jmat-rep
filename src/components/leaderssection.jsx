import React from 'react';
import chair from '../assets/img/chair.JPG';
import secretary from '../assets/img/secretary.JPG';

const LeadersSection = () => {
  return (
    <>
      <div className="row align-items-center text-center mt-2 mx-0">
        <div className="col px-0">
          <hr className="m-0 leader-line-top" />
        </div>
        <div className="col-auto px-0">
          <img src="/logo3.png" alt="Leader" className="img-fluid p-1" style={{ height: '50px' }} />
        </div>
        <div className="col px-0">
          <hr className="m-0 leader-line-top" />
        </div>
      </div>

      <div className="container px-3 px-sm-0">
        <div className="row align-items-center text-center my-0 gx-3 gx-sm-1">
          <div className="col-4 col-md-3 d-flex flex-column align-items-center px-1">
            <img
              src={chair}
              alt="Chairman"
              className="img-fluid rounded-circle custom-shadow"
              style={{ height: '210px',width:'200px', maxWidth: '100%', objectFit: 'cover' }}
            />
            <div className="mt-2 text-center">
              <div className="fw-bold">CHAIRMAN</div>
              <div>Mohamed Mkapa</div>
            </div>
          </div>

          <div className="col-lg-6 col-8 col-md-9 d-flex align-items-center justify-content-center px-1">
            <div className=" text-start px-2">
              <h5 className='text-center'>WELCOME TO JMAT</h5>
              <p className="mb-0 text-lg-justify text-center">
                The Judges and Magistrates Association of Tanzania (JMAT) is an organization that advocates for the interests
                of judges and magistrates across Tanzania. Established to promote unity, uphold professional ethics, and foster
                career development among its members.
              </p>
            </div>
          </div>

          <div className="d-none d-lg-flex col-4 col-md-3 flex-column align-items-center px-1">
            <img
              src={secretary}
              alt="secretary"
              className="img-fluid rounded-circle custom-shadow"
              style={{ height: '210px',width:'200px', maxWidth: '100%', objectFit: 'cover' }}
            />
            <div className="mt-2 text-center">
              <div className="fw-bold">Act. SECRETARY</div>
              <div>Mohamed Mkapa</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row align-items-center text-center mb-2 mx-0">
        <div className="col px-0">
          <hr className="m-0 leader-line-bottom" />
        </div>
        <div className="col-auto px-0">
          <img src="/logo3.png" alt="Leader" className="img-fluid p-1" style={{ height: '50px' }} />
       </div>
        <div className="col px-0">
          <hr className="m-0 leader-line-bottom" />
        </div>
      </div>
    </>
  );
};

export default LeadersSection;
