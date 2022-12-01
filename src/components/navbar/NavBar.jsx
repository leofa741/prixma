import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'
import { Drawer } from '@mui/material';




export const NavBar = () => {

      return (
 <>

<div className="top-nav" id="home">
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <p> <i className='bx bxs-envelope'></i> infoplataformaweb@gmail.com</p>
                    <p> <i className='bx bxs-phone-call'></i> 011 3603-8167</p>
                </div>
                <div className="col-auto social-icons">
                    <a href="https://www.facebook.com/www.puentesdigitales.com.ar"><i className='bx bxl-facebook'></i></a>                 
                    <a href="https://www.instagram.com/puentesdigitales.com.ar/"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.linkedin.com/in/leonardofarena/"><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>
        </div>
    </div>

    
 <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
    <div className="container">       
         <Link  className="navbar-brand" to='/' >PuentesDigitales</Link> <img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/logo.png?raw=true" alt="logo" className="logo" />
       <a className='textlogo'>deploying ideas  </a>       

             <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><MenuIcon 
                sx={{ color: 'white',fontSize: 30,'&:hover': {color: 'white',fontSize: 35, },}}/></span>            
            
        
        <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav ms-auto">
                <li className="nav-item" >
                <NavLink   className="nav-link" to="/home">   <span data-bs-toggle="collapse" data-bs-target="#navbarNav">  Home  </span>       </NavLink>           
                </li>

                <div className="dropdown">
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/puentesdigitales" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav">  Empresa  </span>  </NavLink >
                </li>

                <div className="dropdown-content">
                     <a> <NavLink   to="/puentesdigitales" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav">  Nosotros  </span>  </NavLink ></a>
                     <a> <NavLink   to="/our-history" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav">  Nuestra Historia </span>  </NavLink ></a>
 
                  </div>
                 </div>


                <li className="nav-item"     >
                    <NavLink   className="nav-link" to="/main-services"><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> Servicios </span> </NavLink >
                </li>
{/* 
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/customers"><span data-bs-toggle="collapse" data-bs-target="#navbarNav">  Clientes </span> </NavLink >
                </li> */}

                <li className="nav-item">
                    <NavLink  className="nav-link" to="/novedades"><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> Novedades </span> </NavLink >
                </li>           

                 <div className="dropdown">
                <li className="nav-item">
                    <NavLink  className="nav-link" to="/services" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> Soluciones </span> </NavLink >
                </li>               
  
  <div className="dropdown-content">
    <a> <NavLink   to="/concesionarioweb" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> Cars Online </span> </NavLink ></a>
    <a> <NavLink   to="/design" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav">Desing  </span> </NavLink ></a>
    <a> <NavLink   to="/webdesign" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav">Web Desing</span> </NavLink ></a>
    <a> <NavLink   to="/ecomerce" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav">E-Comerce</span> </NavLink ></a>
    <a> <NavLink   to="/appnative" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> Mobile Delivery</span> </NavLink ></a>
    <a> <NavLink   to="/shiftmagnamentsystem" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> SGM  </span> </NavLink ></a>
    <a> <NavLink   to="/magnamentsystem" ><span data-bs-toggle="collapse" data-bs-target="#navbarNav"> Sist. de Gestion</span> </NavLink ></a>
  </div>
</div>
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
