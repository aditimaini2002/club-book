import React from 'react';
import { NavLink,Link } from 'react-router-dom';

import './Custody.css';
import custImage from '../../Images/gidda.jpeg'
import custody2 from '../../Images/c2s2.jpeg'

const GiddaProfile = () => {
  return (
    <div>
      <div className="profile-container">
        <img
          src={custImage}
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
                <h3>Lethal Gidda</h3>
                <p>Official Gidda Club</p>
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
                    <p>C2S2 Lethal Gidda</p>
                    
                  </div>
                </div>
                <p className="post-text">C2S2 LGS is the official Gidda club of Chitkara University. The club promotes and preserves the traditional Punjabi folk dance form of Gidda among the students of the university. C2S2 LGS organizes various Gidda events, competitions, and workshops to celebrate the culture and heritage of Punjab and provide a platform for the students to showcase their talent and passion for the dance form.</p>

              </div>
            </div>

          </div>
        </div>
      </div >
    </div >

  );
};

export default GiddaProfile;
