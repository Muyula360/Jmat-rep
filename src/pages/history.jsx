import React from 'react';
import { Link } from 'react-router-dom'
import UsefulDocuments from '../components/documents';

const JmatHistory = () => {
  return (
    <>    
    <div className="container-fluid pt-4 pb-2 gallery-card">
     <div className="container">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">History</li>
        </ol>
      </nav>
     </div>
    </div>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-8">
             <div className="mb-4">
                <h5 className="fw-bold text-uppercase">Our History</h5>
                <hr className="" style={{ width: '80px', borderTop: '3px solid #B30000', opacity:'1' }} />
            </div>
          <p className="text-justify">
           <b> The Judges and Magistrates Association of Tanzania (JMAT)</b> was established with the purpose of uniting judicial officers in Tanzania under one platform. Its formation was driven by the desire to promote judicial integrity, independence, and cooperation among members of the bench.
          </p>
          <p className="text-justify">
            Since its inception, JMAT has played a vital role in supporting the personal and professional development of judges and magistrates. It has been a key stakeholder in judicial reforms, advocacy, and the welfare of judicial officers. The association organizes regular training, seminars, and national conferences to share knowledge and address challenges within the judiciary.
          </p>
          <p className="text-justify">
            Over the years, JMAT has strengthened ties with regional and international bodies, ensuring that Tanzanian judicial officers remain informed and engaged on global best practices. The association continues to be a voice of unity and development within the Tanzanian judiciary.
          </p>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
           <UsefulDocuments />
        </div>
      </div>
    </div>
    </>
  );
};

export default JmatHistory;
