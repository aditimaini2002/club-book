import React, { Profiler } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

// import bhangra from '../Images/bhangra.jpeg'
// import custody from '../Images/custody.jpeg'
// import gidda from '../Images/gidda.jpeg'
// import Profile from "../pages/profile/Profile"
// import bhangra from '../Images/bhangra';
// import ImageSlider from './ImageSlider';
import { NavLink,Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './footer/footer';
import './Home2.css'

const Home2 = () => {
    // const images = [
    //     { src:"assets/Images/society.jpeg", alt: 'Image 1' },
    //     { src:"assets/Images/gidda.jpeg", alt: 'Image 2' },
    //     { src:"assets/Images/bhangra.jpeg", alt: 'Image 3' },
    //   ];

    return (
        <div>
            <NavBar />

            {/* <img width="100%" height="600" src='https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/03/CUB4-Top-10-reasons-why-Chitkara-University-is-the-best-University-in-North-India.jpg' /> */}

            <div className="container1">
                <div className="content-left">
                    {/* <h1>Hy! guys</h1> */}
                    <h2 id='welcome'>Welcome to Club Book</h2>
                    <p id='para1'>
                        As a team, our dedication lies in helping students pursue their passions and participate in co-curricular activities. Our website is a one-stop-shop where you can easily find information about any society and upcoming events, making it simple to get involved and engage in activities that interest you
                    </p>

                    <Link to="/signUp"><button className="strt-btn" >Register with Us</button></Link>
                </div>
                <div className="content-right">
                    <img
                        src="assets/images/society.jpeg"
                        alt="profile-image"
                        className="profile-img"
                    />
                </div>
            </div>

            <div className="page-block-4">
                <div className="content-left-4">
                    <div className="portfolio">
                        {/* <h1>Recent Projects</h1> */}
                        <h2>Socities</h2>
                    </div>
                </div>
                <div className="content-right-4">
                    <div className="portfolio-box portfolio-box-1">
                        <div className="portfolio-heading">TASVEER</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/tasveer">
                            View
                        </NavLink></div>

                    </div>
                    <div className="portfolio-box portfolio-box-2">
                        <div className="portfolio-heading">IEI</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/iei">
                            View
                        </NavLink></div>
                    </div>
                    <div className="portfolio-box portfolio-box-3 ">
                        <div className="portfolio-heading">IEEE</div>
                       
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/ieee">
                            View
                        </NavLink></div>
                    </div>
                    <div className="portfolio-box portfolio-box-4">
                        <div className="portfolio-heading">B & B</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/b&b">
                            View
                        </NavLink></div>
                    </div>
                </div>
            </div>
            <div className="page-block-4">
                
                <div className="content-right-4">
                    <div className="portfolio-box portfolio-box-5">
                        <div className="portfolio-heading">CUSTODY</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/custody">
                            View
                        </NavLink></div>

                    </div>
                    <div className="portfolio-box portfolio-box-6">
                        <div className="portfolio-heading">BHANGRA</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/bhangra">
                            View
                        </NavLink></div>
                    </div>
                    <div className="portfolio-box portfolio-box-7 ">
                        <div className="portfolio-heading">GIDDA</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/gidda">
                            View
                        </NavLink></div>
                    </div>
                    <div className="portfolio-box portfolio-box-8">
                        <div className="portfolio-heading">LITERAYLLIS</div>
                        
                        <div className="view-portfolio-btn-2"><NavLink className="view-btn" to="/lits">
                            View
                        </NavLink></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home2;
