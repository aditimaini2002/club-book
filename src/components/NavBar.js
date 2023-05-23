import React, { Profiler } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import logo from "../Images/clubbookLogo.png";

function NavBar() {
    const redirect = () => {
        
    }
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">CLUB-BOOK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <Link className="nav-link active" aria-current="page" to="/ContactUs">Contact Us</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link text-light" to="/about
                                ">About Us</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link className="nav-link text-light" to="/reviews
                                ">Add Review</Link>
                            </li>

                        </ul>
                        <Dropdown className="me-3 ms-3">
                            <Dropdown.Toggle variant="light" id="dropdown-basic-button ">
                                Socities
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                <Dropdown.Item href="/custody" >C2S2 Custody</Dropdown.Item>
                                
                                <Dropdown.Item href="/lits">C2S2 Literayllis</Dropdown.Item>
                                <Dropdown.Item href="/bhangra">C2S2 TBR</Dropdown.Item>
                                <Dropdown.Item href="/gidda">C2S2 lethal Gidda</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">C2S2 Reflection</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">C2S2 Nat Samrat</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">C2S2 Panache</Dropdown.Item>
                                <Dropdown.Item href="/tasveer">C2S2 Tasveer</Dropdown.Item>
                                <Dropdown.Item href="/ieee">IEEE</Dropdown.Item>
                                <Dropdown.Item href="/b&b">Bits and Bytes</Dropdown.Item>
                                
                                <Dropdown.Item href="/iei">IEI</Dropdown.Item>
                                <Dropdown.Item href="#/action-11">GFG</Dropdown.Item>
                                <Dropdown.Item href="/iest">IEST</Dropdown.Item>
                                <Dropdown.Item href="#/action-14">CodeChef</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        {/* <Link exact to="/SignUp"><button className="btn btn-light ms-3">Sign Up</button></Link> */}

                        <Link exact to="/"><button className="btn btn-light ms-3">Log Out</button></Link>

                    </div>
                </div>
            </nav>
    </div>
  )
}

export default NavBar
