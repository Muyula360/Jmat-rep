import React from 'react';
import { Link } from 'react-router-dom';
import UsefulDocuments from '../components/documents';

const Membership = () => {
  return (
    <>
     <div className="container-fluid pt-4 pb-2 gallery-card">
     <div className="container">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Membership</li>
        </ol>
      </nav>
     </div>
    </div>
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-8">
             <div className="mb-4">
                <h5 className="fw-bold text-uppercase">Membership</h5>
                <hr className="" style={{ width: '80px', borderTop: '3px solid #B30000', opacity:'1' }} />
               <div className="row justify-content-center">
                    <p className='my-0 text-justify'>
                    The <strong>Judges and Magistrates Association of Tanzania (JMAT)</strong> is a professional, non-partisan
                    association composed of judicial officers from across the Tanzanian judiciary system. Membership promotes
                    independence, accountability, unity, and the professional development of judicial officers.
                    </p>
                    <div className="row g-2 py-2">
                        <div className="col-md-6 mb-2">
                        <h5 className="fw-semibold">Who Can Be a Member?</h5>
                        <ul>
                            <li>Justices of Appeal</li>
                            <li>Judges of the High Court</li>
                            <li>Resident Magistrates</li>
                            <li>District Magistrates</li>
                            <li>Primary Court Magistrates</li>
                        </ul>
                        </div>

                        <div className="col-md-6 mb-2">
                        <h5 className="fw-semibold">Membership Categories</h5>
                        <ul>
                            <li><strong>Ordinary Members:</strong> Currently serving judicial officers.</li>
                            <li><strong>Honorary Members:</strong> Retired officers recognized for their service.</li>
                            <li><strong>Associate Members:</strong> Optional – may include affiliated legal professionals.</li>
                        </ul>
                        </div>

                        <div className="col-md-6 mb-2">
                        <h5 className="fw-semibold">Membership Rights</h5>
                        <ul>
                            <li>Participate in general meetings and elections</li>
                            <li>Vote and be elected to leadership roles</li>
                            <li>Access training and development programs</li>
                            <li>Stay informed on judicial updates and reforms</li>
                        </ul>
                        </div>

                        <div className="col-md-6 mb-2">
                        <h5 className="fw-semibold">Membership Responsibilities</h5>
                        <ul>
                            <li>Uphold JMAT values and judicial ethics</li>
                            <li>Actively engage in JMAT activities</li>
                            <li>Pay applicable dues and fees</li>
                        </ul>
                        </div>
                    </div>
                    <div className="mt-1">
                        <h5 className="fw-semibold">Why Membership Matters</h5>
                        <ul>
                        <li><strong>Unity:</strong> Connects judicial officers for professional support</li>
                        <li><strong>Welfare:</strong> Advocates for rights and safety of members</li>
                        <li><strong>Capacity Building:</strong> Offers workshops and seminars</li>
                        <li><strong>Judicial Reform:</strong> Acts as a voice for progressive change</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
           <UsefulDocuments />
        </div>
      </div>
    </div>
    </>
  );
};

export default Membership;
