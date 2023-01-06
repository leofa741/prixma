import React, { useEffect, useState } from 'react'

import { FcServices } from "react-icons/fc";
import { Milestone } from '../milestone/Milestone';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import {GoBrowser} from "@react-icons/all-files/go/GoBrowser"; 
import { Follows } from '../folloows/Follows';
import { ParallaxComponent } from '../parallax/ParallaxComponent';
import { customFetch} from '../../database/customfech';

import { Box, LinearProgress } from '@mui/material';
import productos from '../../database/datadb';
import Confetti from 'react-confetti'


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
                    <h4 className="text-center"> {props.title}</h4>                 
                    <p className="text-center">Somos los Puentes Digitales de tus proyectos, con más de 10 años de experiencia en el mercado ofreciendo soluciones tecnológicas a medida para empresas de todos los tamaños. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>
          
            </div>    
            <Confetti
  drawShape={ctx => {
    ctx.beginPath()
    for(let i = 0; i < 22; i++) {
      const angle = 0.35 * i
      const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
      const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
      ctx.lineTo(x, y)
    }
    ctx.stroke()
    ctx.closePath()
  }}
/>
            <Box sx={{ width: "100%"      }}>
              <h5>Cargando... </h5> 
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

<section id="about">
    <div className="container">
   
        <div className="row justify-content-center">
        <div className="about-section">
            <div className="col-md-12">
                    <h1 className="text-center"
                    style={{
                        color: '#000000', fontWeight: 'bold', fontSize: { xs: '1rem', sm: '2.5rem', md: '3.5rem'},
                         fontFamily: 'Roboto',
                        textShadow: '2px 2px 4px #000000', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.1rem',
                        lineHeight: '1.5rem',
                        textAlign: 'center',

                      }}

                    >Diseño Web 100% a medida.</h1>      

                    <p className="text-center"
                    style={{color: '#000000', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Roboto',  }}
                    >Desarrollamos sitios webs con diseños profesionales.No utilizamos plantillas pre diseñadas.</p>
                    <p className="text-center"
                    style={{color: '#000000', fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'Roboto',  }}
                    >Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>
          
            </div>
        
       
        </div>
      
        
            <div className="col-lg-5 py-5">
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
                  <h1 className="text-center-img">Conectamos Ideas</h1>  
                </div>               
            </div>
        </div>
    </div>
</section>



<Follows 
    title="Seguimos las mejores prácticas de desarrollo web"
    descrip="Nuestro equipo de desarrollo web está formado por profesionales con más de 10 años de experiencia en el sector. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad."
/>


<Milestone
title="Mantén la innovación cerca"
descripcion="La innovación es la clave para el éxito de cualquier empresa.
En Puentes Digitales nos encargamos de mantener la innovación cerca de tu empresa, para que puedas aprovechar las oportunidades que te ofrece el mercado."
/>
</>

  )  

    }  
}


