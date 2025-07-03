import { Link } from 'react-router-dom';
import { useState } from 'react';
import LanguageSelector from './language';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <nav className="d-none d-lg-flex m-0 navbar navbar-expand-lg navbar-dark py-1 bg-dark fixed-top" style={{ top: '128px', zIndex: 1040 }}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-1 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">About Us</Link>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><Link className="dropdown-item" to="/history">JMAT-History</Link></li>
                <li><Link className="dropdown-item" to="/leadership">Leadership</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/membership">Membership</Link></li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown">Media Center</Link>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item" to="/news">News and updates</Link></li>
                <li><Link className="dropdown-item" to="/events">Events Gallery</Link></li>
              </ul>
            </li>
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="resourcesDropdown" role="button" data-bs-toggle="dropdown">Notices & Seminars</Link>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li><Link className="dropdown-item" to="/resources/blog">Seminar Schedule</Link></li>
                <li><Link className="dropdown-item" to="/resources/tutorials">Notices</Link></li>
              </ul>
            </li>
             <li className="nav-item"><Link className="nav-link" to="/contacts_us">Contacts us</Link></li>
          </ul>

          <div className="d-flex align-items-center">
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
    </nav>
  );
};

export default Navbar;
