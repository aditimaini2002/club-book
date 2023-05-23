import React from "react";
import "./aboutus.css";
import NavBar from "../NavBar";


const AboutUs = () => {
  return (
    <>
    <NavBar/>
      <div className="about">
        <div className="inner">
          <h1>ABOUT US</h1>
          <p className="text">We are a team of passionate individuals who believe in the power of education and extracurricular activities to shape a student's future.</p>
						<p className="text">We started this website to provide a comprehensive resource for college students looking to explore and participate in various societies and clubs. Our aim is to empower students to grow beyond academics and develop a well-rounded personality.</p>
						<p className="text">Join us in our mission to create a vibrant and inclusive community of students who are enthusiastic about learning and growing in every aspect of their lives.</p>
          <div className="skills">
            <span>ClubBook</span>
            <span>Creative</span>
            <span>Management</span>
          </div>
        </div>
      </div>
      
    
    </>
  );
};

export default AboutUs;
