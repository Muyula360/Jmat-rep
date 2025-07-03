import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="container-fluid pt-4 pb-2 gallery-card">
     <div className="container">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className='breadcrumb-link'>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Login</li>
        </ol>
      </nav>
     </div>
    </div>
        <div className="container my-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-8 col-lg-4">
          <div className="card border-0  custom-shadow">           
            <div className="card-body p-4">
            <div className="text-center pb-4">
              <h5 className="mb-4 pt-2 text-danger fw-bold">CMS - Login</h5>
            </div>
              <form id="loginForm">
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text"><i className="fas fa-lock"></i></span>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label" htmlFor="remember">Remember me</label>
                </div>
                <button type="submit" className="btn btn-danger w-100"> Login </button>
                <div className="text-center mt-3">
                  <a href="#" className="text-decoration-none text-danger">
                    Forgot password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
