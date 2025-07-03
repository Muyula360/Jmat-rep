import React from 'react';
import samplePDF from '../assets/docs/HABARI.pdf'; // Replace with real PDF paths
import secondPDF from '../assets/docs/MAARIFA.pdf';

const documents = [
  { name: 'JMAT Constitution', file: samplePDF },
  { name: 'Annual Report 2024', file: secondPDF },
];

const UsefulDocuments = () => {
  return (
    <div className="container mt-5">
        <div className="card custom-shadow px-3 pb-5">
            <h6 className="fw-bold text-center mt-4">Useful Documents</h6>
            <ul className="list-group list-group-flush mt-2">
                {documents.map((doc, index) => (
                <a href={doc.file} download style={{textDecoration:'none'}}>
                    <li key={index} className="list-group-item d-flex custom-hover-card py-2"> 
                        <div className="d-flex align-items-center">
                        <i className="bi bi-file-earmark-pdf-fill text-danger me-3 fs-3"></i>
                        {doc.name}
                        </div>
                    
                    </li>
                  </a>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default UsefulDocuments;
