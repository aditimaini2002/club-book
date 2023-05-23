import React from 'react';
import "./footer.css";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer id="footer" className="footer-1">
      <div className="main-footer widgets-dark typo-light">
        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-3 marginn">
              <div className="widget subscribe no-box">
                <h5 className="widget-title">CLUB-BOOK<span></span></h5>
                <p>Enhancing Access to Information for Students: Elevating Aesthetics and Efficiency</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 ">
              <div className="widget no-box">
                <h5 className="widget-title">Quick Links<span></span></h5>
                <ul className="thumbnail-widget">
                  <li>
                    <div className="thumb-content"><NavLink to="/SignUp">Get Started</NavLink></div> 
                  </li>
                  
                  
                  <li>
                    <div className="thumb-content"><NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSdYiePy-JHVJXA_7DPV33-pTOf6si3FZa7Zezqc-wOVEuA9Dw/viewform?usp=sf_link">Register for events</NavLink></div> 
                  </li>
                  
                  <li>
                    <div className="thumb-content"><NavLink to="/about">About Us</NavLink></div> 
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 ">
              <div className="widget no-box">
                <h5 className="widget-title">Get Started<span></span></h5>
                <p>Get access to details and events of all socities.</p>
                <NavLink className="btn" to="/signup" >Register Now</NavLink>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3 " >
              <div className="widget no-box">
                <h5 className="widget-title">Contact Us<span></span></h5>
                <p><NavLink to="/ContactUs" title="glorythemes">info@domain.com</NavLink></p>
              </div>
            </div>

          </div>
          
        </div>
      </div>

        <div className="col-md-12 text-center" >
            <p>Copyright Company Name © 2022. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;
