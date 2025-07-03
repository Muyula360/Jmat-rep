import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newsImg from '../assets/img/0F6A0949.jpeg';
import newsImg2 from '../assets/img/habari.JPG';

const eventGroups = [
  {
    title: "Hafla maalum ya kuaga uongozi wa JMAT 2025",
    items: [
      { title: "Event 1", image: newsImg },
      { title: "Event 2", image: newsImg2 },
      { title: "Event 3", image: newsImg },
      { title: "Event 4", image: newsImg2 },
    ]
  },
  {
    title: "Uchaguzi Mkuu wa JMAT 2024",
    items: [
      { title: "Election 1", image: newsImg },
      { title: "Election 2", image: newsImg2 },
      { title: "Election 3", image: newsImg },
    ]
  },
  {
    title: "Mkutano Mkuu wa JMAT 2024",
    items: [
      { title: "Meeting 1", image: newsImg2 },
      { title: "Meeting 2", image: newsImg },
      { title: "Meeting 3", image: newsImg2 },
    ]
  },
  // Add more groups as needed
];

const groupsPerPage = 3;

const getVisiblePages = (totalPages, currentPage) => {
  if (totalPages <= 10) return Array.from({ length: totalPages }, (_, i) => i + 1);
  const pages = [1, 2];

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

const EventsGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(eventGroups.length / groupsPerPage);
  const visibleGroups = eventGroups.slice(
    (currentPage - 1) * groupsPerPage,
    currentPage * groupsPerPage
  );
  return (
    <>
     <div className="container-fluid pt-4 pb-2 gallery-card">
     <div className="container">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Events Gallery</li>
        </ol>
      </nav>
     </div>
    </div>
     <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-8">
             <div className="mb-4">
                <h5 className="fw-bold text-uppercase">Events Gallery</h5>
                <hr className="" style={{ width: '80px', borderTop: '3px solid #B30000', opacity:'1' }} />
                        {visibleGroups.map((group, groupIndex) => {
        const modalId = `groupModal${(currentPage - 1) * groupsPerPage + groupIndex}`;
        const carouselId = `carousel${(currentPage - 1) * groupsPerPage + groupIndex}`;

        return (
          <div className="mb-5" key={modalId}>
            <h6 className="text-primary-emphasis">
              <i className="fas fa-folder-open me-2"></i>{group.title}
            </h6>
            <hr />
            <div className="row">
              {group.items.slice(0, 3).map((item, i) => (
                <div className="col-md-4" key={i}>
                  <button
                    className="border-0 bg-transparent p-0 w-100"
                    data-bs-toggle="modal"
                    data-bs-target={`#${modalId}`}
                  >
                    <div className="card mb-4 border-0 card-3d-shadow position-relative">
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                      <div className="overlay-caption">
                        <p className="mb-0 news-title">{item.title}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Modal with carousel */}
            <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{group.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">
                    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-inner">
                        {group.items.map((slide, j) => (
                          <div key={j} className={`carousel-item ${j === 0 ? 'active' : ''}`}>
                            <img src={slide.image} className="d-block w-100" alt={slide.title} />
                            <div className="overlay-caption">
                              <h6>{slide.title}</h6>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            <i className="fa-solid fa-chevron-left text-dark"></i>
          </button>
        </li>

        {getVisiblePages(totalPages, currentPage).map((pageNum, index) => (
          <li key={index} className={`page-item ${pageNum === currentPage ? 'active' : ''}`}>
            {pageNum === '...' ? (
              <span className="page-link">…</span>
            ) : (
              <button className="page-link" onClick={() => setCurrentPage(pageNum)}>{pageNum}</button>
            )}
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            <i className="fa-solid fa-chevron-right text-dark"></i>
          </button>
        </li>
      </ul>
            </div>


        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <div className="container mt-5">
        <div className="card custom-shadow px-3 pb-5">
            <h6 className="fw-bold text-center mt-4 mb-3">Upcoming Events</h6>
  <div className="px-3 py-2 event-item">
  <p className="mb-2 fw-medium text-dark news-title" style={{ lineHeight: '1.3' }}>
    The Judges and Magistrates Association of Tanzania (JMAT) is committed to promoting judicial excellence and professionalism.
  </p>
  <div className="ps-1" style={{ lineHeight: '1.2' }}>
    <small className="text-secondary m-0 d-block">
      <i className="bi bi-geo-alt-fill me-2 text-danger"></i>Venue: Kilimani Lands Park Hall
    </small>
    <small className="text-secondary m-0 d-block">
      <i className="bi bi-calendar-event-fill me-2 text-danger"></i>Date: 19 July, 2025
    </small>
    <small className="text-secondary m-0 d-block">
      <i className="bi bi-stopwatch-fill me-2 text-danger"></i>Time: 0900hrs
    </small>
  </div>
 <div className="text-end mt-3">
  <Link to="/your-target-route" className="other_links text-danger">
    Read More <i className="fas fa-arrow-right ps-2"></i>
  </Link>
</div>

</div>


        </div>
    </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EventsGallery;
