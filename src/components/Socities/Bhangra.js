import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Image from 'react-bootstrap/Image';

import './Custody.css';
import bhangraImage from '../../Images/bhangra.jpeg'
import custody2 from '../../Images/c2s2.jpeg'
// import custImage from '../../Images/bhangra.jpeg'
// import custImage from '../../Images/bhangra.jpeg'


const BhangraProfile = () => {
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
                <h3>TBR(The Bhangra Regiment)</h3>
                <p>Official Bhangra Club</p>
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
                    <p>C2S2 TBR</p>
                    
                  </div>
                </div>
                <p className="post-text">C2S2 TBR is the official Bhangra club of Chitkara University. The club is dedicated to promoting and preserving the traditional Punjabi folk dance form of Bhangra among the students of the university. C2S2 TBR organizes various Bhangra events, competitions, and workshops to celebrate the culture and heritage of Punjab and provide a platform for the students to showcase their talent and passion for the dance form.</p>

              </div>
            </div>

          </div>
        </div>
      </div >
    </div >

  );
};

export default BhangraProfile;
