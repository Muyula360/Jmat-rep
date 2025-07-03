import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsImg from '../assets/img/0F6A0949.jpeg'; 
import newsImg2 from '../assets/img/habari.JPG'; 

  //function to show and hide some pages on pagination if pages exceed 10
const getVisiblePages = (totalPages, currentPage) => {
  if (totalPages <= 10) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages = [];
        pages.push(1, 2);
        if (currentPage > 5 && currentPage < totalPages - 4) {
            pages.push('...');
            pages.push(currentPage - 1, currentPage, currentPage + 1);
            pages.push('...');
        } else if (currentPage <= 5) {
            for (let i = 3; i <= 6; i++) pages.push(i);
            pages.push('...');
        } else {
            pages.push('...');
            for (let i = totalPages - 5; i <= totalPages - 1; i++) pages.push(i);
        }
        pages.push(totalPages);
        return pages;
};
const newsItems = [
  { title: "JMAT Holds Annual General Meeting in Dodoma", date: "June 10, 2025", image: newsImg2 },
  { title: "Judiciary Members Engage in Legal Aid Week", date: "May 28, 2025", image: newsImg },
  { title: "Judiciary Visits Arusha Court", date: "May 18, 2025", image: newsImg2 },
  { title: "Legal Reforms Seminar Held", date: "May 12, 2025", image: newsImg },
  { title: "Annual Training for Judges", date: "May 5, 2025", image: newsImg2 },
  { title: "JMAT Hosts Public Dialogue", date: "Apr 29, 2025", image: newsImg },
  { title: "Workshop on Ethics in Judiciary", date: "Apr 21, 2025", image: newsImg2 },
  { title: "New Court Technology Introduced", date: "Apr 13, 2025", image: newsImg },
  { title: "Regional Conference on Justice", date: "Apr 7, 2025", image: newsImg2 },
  { title: "Awareness Week Launched", date: "Mar 30, 2025", image: newsImg },
  { title: "Court Users Committee Meeting", date: "Mar 22, 2025", image: newsImg2 },
  { title: "Public Services Forum", date: "Mar 14, 2025", image: newsImg },
  { title: "Judges Tour Training Academy", date: "Mar 2, 2025", image: newsImg2 }, { title: "JMAT Holds Annual General Meeting in Dodoma", date: "June 10, 2025", image: newsImg2 },
  { title: "Judiciary Members Engage in Legal Aid Week", date: "May 28, 2025", image: newsImg },
  { title: "Judiciary Visits Arusha Court", date: "May 18, 2025", image: newsImg2 },
  { title: "Legal Reforms Seminar Held", date: "May 12, 2025", image: newsImg },
];

const itemsPerPage = 8;

const Newslist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>    
      <div className="container-fluid pt-4 pb-2 gallery-card">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">News & Updates</li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container my-5">
        <h5 className="fw-bold text-uppercase">News</h5>
        <hr style={{ width: '80px', borderTop: '3px solid #B30000', opacity: '1' }} />
        <div className="row">
          {currentItems.map((news, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-4 border-0 card-3d-shadow">
                <img src={news.image} className="card-img-top" alt={news.title} style={{ height: '150px', objectFit: 'cover' }} />
                <div className="card-body px-3">
                  <small className="text-muted">
                    <i className='me-1 bi bi-calendar3'></i>{news.date}
                  </small>
                  <h6 className="fw-bold mt-2 text-dark-emphasis news-title mb-0">{news.title}</h6>
                </div>
                <Link to="" className="other_links text-primary text-decoration-none">
                  <div className="card-footer text-center">Read more<i className='fas fa-arrow-right ms-2'></i></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    <i class="fa-solid fa-chevron-left text-dark"></i>
                </button>
            </li>
            {getVisiblePages(totalPages, currentPage).map((pageNum, index) => (
                <li key={index} className={`page-item ${pageNum === currentPage ? 'active' : ''}`}>
                {pageNum === '...' ? ( <span className="page-link">...</span> ) : (
                    <button className="page-link" onClick={() => handlePageChange(pageNum)}>{pageNum}</button>
                )}
                </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    <i class="fa-solid fa-chevron-right text-dark"></i>
                </button>
            </li>
        </ul>

      </div>
    </>
  );
};

export default Newslist;
