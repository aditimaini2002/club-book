import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Image from 'react-bootstrap/Image';

import './Custody.css';
import bhangraImage from '../../Images/b&b.jpeg'
import custody2 from '../../Images/bnbProfile.png'
// import custImage from '../../Images/bhangra.jpeg'
// import custImage from '../../Images/bhangra.jpeg'


const BnbProfile = () => {
  return (
    <div>
      <div className="profile-container">
        <img
          src={bhangraImage}
          className="cover-img"
          alt=""
        />
        <div className="profile-details">
          <div className="pd-left">
            <div className="pd-row">
              <img
                src={custody2}
                className="pd-images"
                alt=""
              />
              <div>
                <h3>BNB</h3>
                <p>Bits and Bytes</p>
                <img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt="" />
                <img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt="" />
                <img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt="" />
                <img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt="" />
              </div>
            </div>
          </div>

          <div className="pd-right">
            <button type="button">
              <img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt="" /> Follow
            </button>
            <button type="button">
              <img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt="" /> Ask doubts
            </button>
            <br />
            {/* <NavLink to=""
            ><img src="./photo-1579353977828-2a4eab540b9a.jpeg" alt=""
              /></NavLink> */}
          </div>
        </div>
        <div className="profile-info">
          <div className="info-col"></div>
          <div className="post-col">
            <div className="write-post-container">
              

              <div className="post-input-container">
                
                <div className="add-post-links">
                  <NavLink to=""
                  ><img
                      src="./photo-1579353977828-2a4eab540b9a.jpeg"
                      alt=""
                    />Upcoming Events</NavLink>
                  <NavLink to=""
                  ><img
                      src="./photo-1579353977828-2a4eab540b9a.jpeg"
                      alt=""
                    />Photos/Videos</NavLink>
                  <NavLink to="/gallery"
                  ><img
                      src="./photo-1579353977828-2a4eab540b9a.jpeg"
                      alt=""
                    />Past Events</NavLink>
                </div>
              </div>
            </div>


            <div className="post-container">
              <div className="write-post-container">
                <div className="user-profile">
                  
                  <div>
                    <p>BNB</p>
                    
                  </div>
                </div>
                <p className="post-text">Bits and Bytes is a technical and non-technical club of Chitkara University. The club aims to promote and develop both technical and non-technical skills among the students of the university by organizing various workshops, seminars, competitions, and events related to coding, entrepreneurship, public speaking, and other areas of interest. Bits and Bytes provides a platform for the students to learn and explore various fields and also helps them to connect with industry experts and professionals..</p>

              </div>
            </div>

          </div>
        </div>
      </div >
    </div >

  );
};

export default BnbProfile;
