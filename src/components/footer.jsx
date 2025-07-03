import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='mb-0' >
    <div className="container-fluid bg-black text-white py-1">
      <div className="container">
        <div className="row text-center">
            <div className="col-md-3 col-6 my-3">
            <div className="pt-3 pb-1 px-3 text-start">
                <h6 className='fw-bold'>ADDRESS</h6>
                <h6 className="py-2 lh-base mb-0">
                    JMAT HQ Dodoma,<br />
                    P.O. Box 2301,<br />
                    Dodoma - Tanzania
                </h6>
                <p className='ps-4 pt-2' style={{fontSize:'14px'}}>
                <i className="fa-solid fa-phone"></i> 255(0) 22-245-345-1 <br />
                <i className="fa-solid fa-envelope"></i> info.service@jmat.or.tz
                </p>
            </div>
            </div>
                <div className="col-md-3 col-6 my-3">
            <div className="pt-3 pb-1 px-3 text-start">
                <h6 className='fw-bold'>QUICK LINKS</h6>
                <h6 className="py-2 lh-base mb-0">
                    <Link to="" className='footer-link'>Home </Link> <br />
                    <Link to="" className='footer-link'>About Us </Link><br />
                    <Link to="" className='footer-link'>Members Portal </Link><br />
                    <Link to="" className='footer-link'>News and Updates </Link><br />
                    <Link to="" className='footer-link'>Events and Serminars </Link>
                </h6>
                
            </div>
            </div>
                <div className="col-md-3 col-6 my-3">
                    <div className="pt-3 pb-4 px-3 text-start text-white">
                        <h6 className="fw-bold mb-2">SUBSCRIBE</h6>
                        <p className="mb-3 pt-2" style={{ fontSize: '14px', lineHeight: '1.6' }}>Don't miss news, tips, and announcements in your inbox.</p>
                        <form className="input-group input-group-sm">
                            <input type="email" className="form-control bg-transparent footer-email border-2 text-white" placeholder="Enter your email"  required />
                            <button type="submit" className="btn btn-light">Submit</button>
                        </form>
                        <div className='text-center pt-3'>
                            <i className="fa-brands fa-square-facebook fs-3 me-4"></i>
                            <i className="fa-brands fa-square-x-twitter fs-3 me-4"></i>
                            <i className="fa-brands fa-square-instagram fs-3 me-4"></i>
                            <i className="fa-brands fa-square-youtube fs-3"></i>
                        </div>
                 </div>
            </div>
            <div className="col-md-3 col-6 mt-1">
                <div className="pt-3 pb-1 px-3 text-center">
                    <img src="/logo1.png" alt="" width="150px" height="150px" /> <br />
                    <button className='btn btn-light'>BECOME A MEMBER</button>
                </div>
             </div>
        </div>
      </div>
   </div>
    <div className="text-center">
        <p className='py-1 mb-0'>JMAT &copy; 2025-2026. All Rights Reserved <br /> Designed, Developed and Maintained by Judiciary DICT</p>
      </div>
   </div>
  );
};

export default Footer;
