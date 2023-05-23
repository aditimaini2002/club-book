import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Image from 'react-bootstrap/Image';

import './Custody.css';
import bhangraImage from '../../Images/ieeeCover.png'
import custody2 from '../../Images/ieeeProfile.png'
// import custImage from '../../Images/bhangra.jpeg'
// import custImage from '../../Images/bhangra.jpeg'


const IeeeProfile = () => {
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
                <h3>IEEE</h3>
                <p>Institution of Engineers Club</p>
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
                    <p>IEEE</p>
                    
                  </div>
                </div>
                <p className="post-text">IEEE is a technical club of Chitkara University. The club is dedicated to promoting and advancing the fields of electrical, electronics, and computer engineering by organizing various events, workshops, and seminars related to these fields and providing a platform for the students to learn and explore these areas. IEEE also helps the students to connect with industry experts and professionals and provides opportunities for them to showcase their skills and knowledge in these fields..</p>

              </div>
            </div>

          </div>
        </div>
      </div >
    </div >

  );
};

export default IeeeProfile;
