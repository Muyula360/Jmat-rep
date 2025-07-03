import { Link } from 'react-router-dom';
import { useState } from 'react';
import LanguageSelector from './language';
import Heading from './heading';

const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const [search, setSearch] = useState('');

  return (
    <header className="fixed-top bg-white" style={{ zIndex: 1050 }}>
    <div className="d-flex justify-content-end bg-primary">
      <small className="text-end text-white mb-0 px-4 py-1">
        Toll-free 0808-123-242 | <i>jmat@judiciary.go.tz</i>
      </small>
    </div>
    <div className="gradient-background">
     <Heading />
    </div>
{/* Offcanvas Sidebar */}
<div
  className="offcanvas offcanvas-end offcanvas-custom px-2"
  tabIndex="-1"
  id="mobileSidebar"
  aria-labelledby="mobileSidebarLabel"
>
  <div className="offcanvas-header d-flex align-items-start justify-content-between mt-2 mx-0">
  <div className="d-flex align-items-center">
    <img src="/logo3.png" alt="Logo" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%',marginRight: '5px' }} />
    <small className="mb-0 text-dark">JUDGES AND MAGISTRATES ASSOCIATION OF TANZANIA</small>
  </div>

  <button
    type="button"
    className="btn-close btn-close-dark mt-1"
    data-bs-dismiss="offcanvas"
    aria-label="Close"
  ></button>
</div>

<hr className='my-0' />
  <div className="offcanvas-body">
   <ul className="navbar-nav me-auto mb-1 mt-2 mb-lg-0">
    
  <li className="nav-item">
    <Link className="nav-link" to="/">Home</Link>
  </li>

  {/* About Us */}
  <li className="nav-item">
    <button
      className="btn btn-link nav-link w-100 text-start"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#aboutUsMenu"
      aria-expanded="false"
      aria-controls="aboutUsMenu"
    >
      About Us
    </button>
    <div className="collapse" id="aboutUsMenu">
      <ul className="list-unstyled ps-3">
        <li><Link className="nav-link" to="/history">JMAT-History</Link></li>
        <li><Link className="nav-link" to="/leadership">Leadership</Link></li>
      </ul>
    </div>
  </li>

  {/* Membership */}
  <li className="nav-item">
    <Link className="nav-link" to="/membership">Membership</Link>
  </li>

  {/* Media Center */}
  <li className="nav-item">
    <button
      className="btn btn-link nav-link w-100 text-start"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#mediaMenu"
      aria-expanded="false"
      aria-controls="mediaMenu"
    >
      Media Center
    </button>
    <div className="collapse" id="mediaMenu">
      <ul className="list-unstyled ps-3">
        <li><Link className="nav-link" to="/news">News and Updates</Link></li>
        <li><Link className="nav-link" to="/events">Events Gallery</Link></li>
      </ul>
    </div>
  </li>

  {/* Notices & Seminars */}
  <li className="nav-item">
    <button
      className="btn btn-link nav-link w-100 text-start"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#noticesMenu"
      aria-expanded="false"
      aria-controls="noticesMenu"
    >
      Notices & Seminars
    </button>
    <div className="collapse" id="noticesMenu">
      <ul className="list-unstyled ps-3">
        <li><Link className="nav-link" to="/resources/blog">Seminar Schedule</Link></li>
        <li><Link className="nav-link" to="/resources/tutorials">Notices</Link></li>
      </ul>
    </div>
  </li>

  {/* Contacts Us */}
  <li className="nav-item">
    <Link className="nav-link" to="/contacts_us">Contacts Us</Link>
  </li>
</ul>


    <div className="d-flex align-items-center mt-3">
      <div className="position-relative">
        {showInput && (
          <input
            type="search"
            className="form-control position-absolute end-0"
            style={{ zIndex: 1050, width: '200px' }}
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onBlur={() => setShowInput(false)}
            autoFocus
          />
        )}
        {!showInput && (
          <button
            type="button"
            className="language"
            onClick={() => setShowInput(true)}
            aria-label="Open search"
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        )}
      </div>
      <LanguageSelector />
    </div>
  </div>
</div>

    </header>
  );
};

export default Header;
