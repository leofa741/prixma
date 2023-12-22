import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import confetti from 'canvas-confetti';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css'



export const NavBar = () => {
   
      return (
 <>
    
 <nav className="navbar navbar-expand-lg navbar-light sticky-top" >
    <div className="container" style={{ marginTop: "-3px",  }}  >       
         <Link  className="navbar-brand" to='/' 
          style={{
            color: "white",
            fontFamily: "sans-serif",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "left",
            textShadow: "2px 2px 4px #000000",
            textTransform: "uppercase",
            
            textDecorationColor: "white",
            textDecorationStyle: "solid",
            textDecorationThickness: "15px",
            textUnderlineOffset: "10px",
            textRendering: "optimizeLegibility",
            textOrientation: "upright",
            textOverflow: "clip",
            textIndent: "0px",
            textJustify: "auto",
            textKashida: "auto",
            textKashidaSpace: "0px",
            textAnchor: "start",
            textEmphasis: "none",
            textEmphasisColor: "currentcolor",
            textEmphasisStyle: "none",
            textEmphasisPosition: "over right",              
            textEmphasisCustom: "none",
            textCombineUpright: "none",
            textOrientationVertical: "mixed",
            marginTop: "-10px",
          }}>PuentesDigitales</Link> 
       <a className='textlogo'
            style={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: "10px",
                fontWeight: "bold",
                textAlign: "left",
                textShadow: "2px 2px 4px #ffffff",
                textTransform: "uppercase",
                textDecorationColor: "white",
                textDecorationStyle: "solid",
                textDecorationThickness: "15px",
                textUnderlineOffset: "10px",
                textRendering: "optimizeLegibility",
                textOrientation: "upright",
                textOverflow: "clip",
                textIndent: "0px",
                textJustify: "auto",
                textKashida: "auto",
                textKashidaSpace: "0px",
                textAnchor: "start",
                textEmphasis: "none",
                textEmphasisColor: "currentcolor",
                textEmphasisStyle: "none",
                textEmphasisPosition: "over right",
                textEmphasisCustom: "none",
                textCombineUpright: "none",
                textOrientationVertical: "mixed",
                marginTop: "30px",
            }}>deploying ideas  </a>       

             <span className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><MenuIcon 
                sx={{ color: 'white',fontSize: 30,'&:hover': {color: 'white',fontSize: 35, },}}/></span>            
            
            {/* data-bs-toggle="collapse" data-bs-target="#navbarNav"  */}
        <div className="collapse navbar-collapse" id="navbarNav"  >
            <ul className="navbar-nav ms-auto">
         

                <li className="nav-item" >
                <NavLink  to="/home"  className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` } >  
                  <span className='active1' >Home </span></NavLink>           
                </li>

                <div className="dropdown">
                <li className="nav-item">
                    <NavLink 
                    to="/puentesdigitales"
                     className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` } ><span className='active1' >  Empresa  </span>  </NavLink >
                </li>

                <div className="dropdown-content">
                    
                     <a> <NavLink   to="/our-history" ><span className='active2' >  Nuestra Historia </span>  </NavLink ></a>
 
                  </div>
                 </div>


                <li className="nav-item"     >
                    <NavLink  className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` }  to="/main-services"><span className='active1'> Servicios </span> </NavLink >
                </li>


                <div className="dropdown">
                <li className="nav-item">
                    <NavLink  className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` }  to="/nuestras-practicas" ><span className='active1' > Nuestras Prácticas </span>  </NavLink >
                </li>

                <div className="dropdown-content">
                     <a> <NavLink   to="/ux-ui" ><span className='active2' >  UX/UI  </span>  </NavLink ></a>
                     <a> <NavLink   to="/transformacion-digital" ><span className='active2' > transformación Digital</span>  </NavLink ></a>
                     <a> <NavLink   to="/software-arquitectura" ><span className='active2' > Arquitectura de Software </span>  </NavLink ></a>
 
                  </div>
                 </div>



                {/* <li className="nav-item">
                    <NavLink  className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` }  to="/novedades"><span className='active1' data-bs-toggle="collapse" data-bs-target="#navbarNav"> Novedades </span> </NavLink >
                </li>    

                 */}


                 <div className="dropdown">
                <li className="nav-item">
                    <NavLink  className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` }  to="/services" ><span className='active1' > Soluciones </span> </NavLink >
                </li>               
  
  <div className="dropdown-content">
    <a> <NavLink   to="/concesionarioweb" >    <span className='active2' > Cars Online </span> </NavLink ></a>
    <a> <NavLink   to="/design" >              <span className='active2' >Desing  </span> </NavLink ></a>
    <a> <NavLink   to="/webdesign" >           <span className='active2' >Web Desing</span> </NavLink ></a>
    <a> <NavLink   to="/ecomerce" >            <span className='active2' >E-Comerce</span> </NavLink ></a>
    <a> <NavLink   to="/appnative" >           <span className='active2' > Mobile Delivery</span> </NavLink ></a>
    <a> <NavLink   to="/shiftmagnamentsystem" ><span className='active2' > SGM  </span> </NavLink ></a>
    <a> <NavLink   to="/magnamentsystem" >     <span className='active2' > Sist. de Gestion</span> </NavLink ></a>
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
                  <li className="nav-item">
           <NavLink  className={ ({ isActive }) => `nav-link   ${isActive ? 'active':''}` }  to="/contact" ><span className='active1' > Contacto </span> </NavLink >
            </li>
            </ul>
            {/* <Link to="login" data-bs-toggle="modal" data-bs-target="#exampleModal"
                className="btn btn-brand ms-lg-3">Contact</Link> */}
        </div>
    </div>
</nav>

 </>
  )
}
