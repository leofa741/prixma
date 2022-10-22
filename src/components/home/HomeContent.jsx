import React from 'react'


import ActionAreaCard from '../cards/CardsComponent'
import { FcIdea  } from "@react-icons/all-files/fc/FcIdea ";

import { FcServices } from "react-icons/fc";
import { Milestone } from '../milestone/Milestone';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import {GoBrowser} from "@react-icons/all-files/go/GoBrowser"; 

export const HomeContent = () => {   

  return (
  <>
  

<section id="about">
    <div className="container">
        <div className="row justify-content-center">
        <div className="about-section">
            <div className="col-md-12">
                    <h1 className="text-center">Conectamos tus Ideas Construyendo Puentes...</h1>
                 
                    <p className="text-center">Somos los Puentes Digitales de tus proyectos, con más de 10 años de experiencia en el mercado ofreciendo soluciones tecnológicas a medida para empresas de todos los tamaños. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>

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


<ActionAreaCard/>


<Milestone/>





</>

  )  
  
}
