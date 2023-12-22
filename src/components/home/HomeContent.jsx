import React, { useEffect, useState } from 'react'


import { FcServices } from "react-icons/fc";
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import {GoBrowser} from "@react-icons/all-files/go/GoBrowser"; 
import { customFetch} from '../../database/customfech'; 
import { Box, LinearProgress } from '@mui/material';
import productos from '../../database/datadb';
import { CardPracticas } from '../cardpracticas/CardPracticas';
import './home.css';
import ot from '../../assets/img/ot.png';
import { ServicesComponent } from '../services/ServicesComponent';
import { PrincipalServices } from '../principalservices/PrincipalServices';
import { ContentServives } from '../principalservices/ContentServives';

export const HomeContent = (props) => {   

    const [items, setItems] = useState([]);  
  
    useEffect(() => {        
        customFetch(2000, productos).then((data) => setItems(data));
       }, []);  

     
    if (items.length === 0) {
        return (
            <div className="container">   
            <div className="row justify-content-center">
            <div className="about-section">
            <div className="col-md-12">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            <h4 className="text-center"> {props.title}</h4>                 
            <p className="text-center"> www.puentesdigitales.com.ar  </p>
          
            </div>    

            <Box sx={{ width: "100%"      }}>            
              <LinearProgress />
              <br></br>
            </Box>
            </div>
            </div>
          </div>
        );
    }
   
   else {
  return (
  <>
  <br /> 

<section id="about">
    <div className="container"> 
   
        <div className="row justify-content-center">
        <div className="about-section">

                <div className="col-md-12">
                    <h1 className="text-center"
                    style={{
                        color: '#000000',
                        fontWeight: 'bold',
                        fontSize:{ xs: '1rem', sm: '1.5rem', md: '2rem' },
                        fontFamily: 'Roboto',
                        textShadow: '4px 4px 9px #000000', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.2rem',
                        lineHeight: '2.5rem',
                        textAlign: 'center', 
                        textJustify: 'inter-word ',                 
                      }}>Queremos que nos conozcas.</h1>                          
                    </div> 
                    
                      {/* <div className="noticia">
                         <p> Somos un equipo de profesionales apasionados por la creación y el diseño de páginas web y tiendas online desde el año 2009.<br/>
                         Desde entonces hemos trabajado para empresas de Argentina , abarcando una amplia gama de sectores y necesidades.</p>

                    <img class="derecha" src={ot}    alt="undraw-Online-shopping-re-ol1t" border="0" />
                    </div>       */}
                
           </div>  
           {/* <div className=" noticia1">
                    <p className="text-center"
                      style={{color: '#1D1D28', 
                            fontWeight: 'bold',
                             fontSize: '1rem',
                             fontFamily: 'Roboto',                        
                              textTransform: 'uppercase',
                              letterSpacing: '0.1rem',
                            }}
                    >Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>
          
                    </div> */}

           <CardPracticas />               

            <div className="col-lg-6 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="info-box">
                          <h1> <BrushIcon
                            sx={{ fontSize: 65, color: '#FF7F27' }}                            
                            /> </h1>
                            <div className="ms-4">
                                <h5>Diseño Web  </h5>
                                <p>Diseño de tiendas online, con la mejor tecnología y experiencia de usuario.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="info-box">
                          <h1> <CodeIcon
                            sx={{ fontSize: 65, color: '#050F97' }}                            
                            /> </h1>
                            <div className="ms-4">
                            <h5>Desarrollo Web</h5>
                                <p>
                                    Desarrollo de aplicaciones web, aplicaciones móviles para android /IOS ,desarrollo de software a medida y aplicaciones web para empresas y particulares.
                                    con la mejor tecnología y experiencia de usuario.
                                </p>
                            </div>
                        </div>
                    </div>                

                    <div className="col-12">
                        <div className="info-box">
                          <h1> <GoBrowser
                          fontSize='62px' 
                           color='#54C1F0'

                            /> </h1>
                            <div className="ms-4">
                                <br />
                                <br />
                                
                            <h5>Ux/Ui</h5>
                                <p>
                                    Diseño de interfaces de usuario, con la mejor tecnología y experiencia de usuario.
                                    Generamos innovación digital a través de diferentes conjuntos de factores y elementos relacionados a la interacción del usuario con un entorno digital.
                               </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="info-box">
                        <h1> <FcServices
                              fontSize='62px' 
                            /> </h1>
                            <div className="ms-4">
                                <h5>Optimización</h5>
                                <p>
                                    Optimización de páginas web, tiendas online, aplicaciones móviles, desarrollo de software a medida.                     

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-lg-5">

                <div className="about-img" >
                  <h1 className="text-center-img"
                    style={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        fontFamily: 'Roboto',
                        textShadow: '4px 4px 9px #000000',
                        textTransform: 'uppercase',
                        letterSpacing: '0.3rem',
                        lineHeight: '1.6rem',
                        textAlign: 'center',
                        textJustify: 'inter-word ',
                  
                        }} ><br /> <br /> 
                    Desarrollamos sistemas web a medida para acompañar tus procesos de transformación digital</h1>  
                </div>               
            </div>
        </div>
    </div>
</section>


<ContentServives
  title="PRINCIPALES SERVICIOS ELEGIDOS POR NUESTROS CLIENTES"
 
 />
<br /> 

</>

  )}}


