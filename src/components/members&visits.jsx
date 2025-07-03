import React from 'react';
import Members from './member';
import Visits from './visits';

const MembersAndVisits = () => {
  return (
    <div className="visit-container text-white mb-0" >
      <div className="visit-container-content">
        <ul className="nav nav-pills justify-content-center mb-4 border-2" id="pills-tab" role="tablist" >
        <li className="nav-item visit"  role="presentation">
          <button  className="nav-link active" id="pill-one-tab" data-bs-toggle="pill" data-bs-target="#pill-one" type="button" role="tab" aria-controls="pill-one" aria-selected="true">Members Stats </button>
        </li>
         <li className="nav-item visit"  role="presentation">
          <button  className="nav-link" id="pill-two-tab" data-bs-toggle="pill" data-bs-target="#pill-two" type="button" role="tab" aria-controls="pill-two" aria-selected="false"  >Visits Stats </button>
        </li>
      </ul>
      <div className="tab-content container" id="pills-tabContent">
        <div className="tab-pane fade show active" id="pill-one" role="tabpanel" aria-labelledby="pill-one-tab"  >
            <Members />
        </div>
        <div className="tab-pane fade" id="pill-two" role="tabpanel" aria-labelledby="pill-two-tab" >
            <Visits />
        </div>
      </div>
      </div>
    </div>
  );
};

export default MembersAndVisits;
