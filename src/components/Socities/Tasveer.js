import React from 'react';
import { NavLink,Link } from 'react-router-dom';

import './Custody.css';
import custImage from '../../Images/tasveer.jpeg'
import custody2 from '../../Images/c2s2.jpeg'

const TasveerProfile = () => {
  return (
    <div>
      <div className="profile-container">
        <img
          src={custImage}
          className="cover-img"
          alt=""/>
        <div className="profile-details">
          <div className="pd-left">
            <div className="pd-row">
              <img
                src={custody2}
                className="pd-images"
                alt=""/>
              <div>
                <h3>Tasveer</h3>
                <p>Official Photography Club</p>
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
                    <p>C2S2 Tasveer</p>
                    
                  </div>
                </div>
                <p className="post-text">C2S2 Tasveer is the official photography club of Chitkara University. The club provides a platform for students interested in photography to showcase their talent, develop their skills, and explore their creativity. C2S2 Tasveer organizes various events, workshops, and competitions related to photography to encourage and enhance the photographic skills of the students.</p>

              </div>
            </div>

          </div>
        </div>
      </div >
    </div >

  );
};

export default TasveerProfile;
