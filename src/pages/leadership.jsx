import React from 'react';
import { Link } from 'react-router-dom'
import UsefulDocuments from '../components/documents';
import chair from '../assets/img/chair.JPG';

const Leadership = () => {
    const leadership = [
    { title: 'Chairperson', name: 'Hon. Justice A. Chair', image: chair },
    { title: 'Vice-Chairperson', name: 'Hon. Justice B. Vice', image: chair },
    { title: 'Act Secretary', name: 'Mag. C. Secretary', image: chair },
    { title: 'Deputy Act Secretary', name: 'Mag. D. Deputy', image: chair },
    { title: 'Treasurer', name: 'Mag. E. Treasurer', image: chair },
    { title: 'Publicity Secretary', name: 'Hon. F. Publicity', image: chair }
  ];
  return (
    <>    
    <div className="container-fluid pt-4 pb-2 gallery-card">
     <div className="container">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Leadership</li>
        </ol>
      </nav>
     </div>
    </div>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-8">
             <div className="mb-4">
                <h5 className="fw-bold text-uppercase">Our leadership</h5>
                <hr className="" style={{ width: '80px', borderTop: '3px solid #B30000', opacity:'1' }} />
               <div className="row justify-content-center">
        {leadership.map((leader, index) => (
          <div key={index} className="col-md-6 col-6 col-lg-4 mb-4">
            <div className="border rounded shadow-sm text-center bg-light">
              <img
                src={leader.image}
                alt={leader.name}
                className="mb-3"
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <h6 className="mb-1 fw-semibold small">{leader.name}</h6>
              <p className="text-muted small">{leader.title}</p>
            </div>
          </div>
        ))}
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

export default Leadership;
