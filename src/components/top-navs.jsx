import { Link } from 'react-router-dom';
import { useState } from 'react';
import LanguageSelector from './language';
import Heading from './heading';

const Header = () => {
    const [showInput, setShowInput] = useState(false);
    const [search, setSearch] = useState('');

  return (
    <header className="fixed-top bg-white border-bottom" style={{ zIndex: 1050 }}>
    <div className="d-flex justify-content-end bg-primary">
      <small className="text-end text-white mb-0 px-4 py-2">
        Toll-free 0808-123-242 | <i>jmat@judiciary.go.tz</i>
      </small>
    </div>
    <div className="gradient-background">
     <Heading />
    </div>
{/* Offcanvas Sidebar */}
<div
  className="offcanvas offcanvas-end offcanvas-custom"
  tabIndex="-1"
  id="mobileSidebar"
  aria-labelledby="mobileSidebarLabel"
>
  <div className="offcanvas-header">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <ul className="navbar-nav me-auto mb-1  mt-5 mb-lg-0">
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



    </header>
  );
};

export default Header;
