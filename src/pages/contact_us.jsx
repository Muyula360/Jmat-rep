import React from 'react';
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
    <div className="container-fluid pt-4 pb-2 gallery-card">
     <div className="container">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
        </ol>
      </nav>
     </div>
    </div>
    <div className='container py-3 my-4'>
      <div className="row justify-content-center px-5 px-md-2 px-sm-0">
        <div className="col-12 col-md-6 col-sm-12 mb-5">
            <div className="card p-4 border-0 custom-shadow">
            <h6 className='fw-bold py-2'>TALK TO US</h6>
          <form>
            <div className="mb-3 mb-sm-2">
              <label htmlFor="name" className="form-label pb-0 mb-0">Full Name</label>
              <input type="text" className="form-control form-control-sm" id="name" placeholder="Your name" autoComplete='off' />
            </div>
            <div className="mb-3 mb-sm-2">
              <label htmlFor="email" className="form-label pb-0 mb-0">Email Address <span className='text-danger'>*</span></label>
              <input type="email" className="form-control form-control-sm fo" id="email" placeholder="your@email.com" autoComplete='off' />
            </div>
            <div className="mb-3 mb-sm-2">
            <label htmlFor="talkAbout" className="form-label pb-0 mb-0">Talk About <span className='text-danger'>*</span></label>
            <select className="form-select form-select-sm" id="talkAbout">
                <option value="">-- Select a topic --</option>
                <option value="report-abuse">Report Abuse</option>
                <option value="complaint">Report Complaint</option>
                <option value="suggetion">Give Suggetion</option>
            </select>
            </div>
            <div className="mb-3 mb-sm-2">
              <label htmlFor="message" className="form-label pb-0 mb-0">Your Message <span className='text-danger'>*</span></label>
              <textarea className="form-control form-control-sm" id="message" rows="4" placeholder="Write your message here..." ></textarea>
            </div>
            <button type="submit" className="btn btn-danger btn-sm w-100 mt-2">Send Message</button>
          </form>
        </div>
        </div>
        <div className="col-12 col-md-6 col-sm-12 ">
            <div className="card p-4 border custom-shadow">
                <h6 className='fw-bold py-3'>CONTACTS DETAILS</h6>  
                <div className='pb-4 pb-sm-2'>
                    <h6 className='py-2'><b>Postal Address:</b> <br /> P.O.Box 2302, Dodoma - Tanzania</h6>
                    <h6 className='py-2'><b>Physical Address:</b> <br /> Dodoma Makulu, Near Jakaya Convection UDOM/Iyumbu Road</h6>
                    <h6 className='py-2'><b>Phone:</b> <br /> 255(0) 22 293 2345</h6>
                    <h6 className='py-2'><b>Email Address:</b> <br />info.service@jmat.or.tz</h6>
                    <h6 className='py-2'><b>Office Opens:</b> <br />Mon to Fri 08:00am to 03:00pm</h6>
                </div>  
            </div>    
        </div>   
      </div>
      <div className="row my-4 my-sm-1 px-5 px-md-2 px-sm-0">
        <h6 className='pt-4 fw-bold'>Location on Map</h6>
        <div className="col-12 ">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6621.256008640528!2d35.76919587256409!3d-6.190134916856963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184dfbf3edc16e19%3A0x3442709baa7c3d45!2sMakulu%20shopping!5e1!3m2!1sen!2stz!4v1750241475986!5m2!1sen!2stz" width="100%" height="400vh" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Makulu Location Map" ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
