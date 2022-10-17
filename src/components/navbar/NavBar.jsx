import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';




export const NavBar = () => {

 
  return (
 <>



<div className="top-nav" id="home">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <p> <i className='bx bxs-envelope'></i> info@example.com</p>
                    <p> <i className='bx bxs-phone-call'></i> 123 456-7890</p>
                </div>
                <div className="col-auto social-icons">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>
        </div>
    </div>

    
 <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div className="container">
         <Link  className="navbar-brand" to='/' >PuentesDigitales</Link> 
       

             <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><MenuIcon /></span>
            
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink   className="nav-link" to="/home">Home</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/services">Services</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/novedades">Novedades</NavLink >
                </li>
                {/* <li className="nav-item">
                    <NavLink  className="nav-link" to="/login">Portfolio</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/login">Team</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/servces">Reviews</NavLink >
                </li>
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/">Blog</NavLink >
                </li> */}
            </ul>
            {/* <Link to="login" data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="btn btn-brand ms-lg-3">Contact</Link> */}
        </div>
    </div>
</nav>

 </>
  )
}
