import React from 'react'

import { Banner } from '../banner/Banner'
import ActionAreaCard from '../cards/CardsComponent'
import { FcIdea  } from "@react-icons/all-files/fc/FcIdea ";
import { FcServices } from "react-icons/fc";


export const HomeContent = () => {
  return (
    <>


<section id="about">
    <div className="container">
        <div className="row justify-content-center">
        <div className="about-section">
            <div className="col-md-12">
                    <h1 className="text-center">About Us</h1>
                    <p className="text-center">Conectamos Ideas.Construimos Puentes..</p>
                    <p className="text-center">Somos una empresa de desarrollo de software, con más de 10 años de experiencia en el mercado, que ofrece soluciones tecnológicas a medida para empresas de todos los tamaños. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>

            </div>
        </div>

                   
            <div className="col-lg-5 py-5">

              

                        


                <div className="row">
                    <div className="col-12">
                        <div className="info-box">
                          <h1> <FcServices
                            size="2em"
                            color="blue"
                            /> </h1>

                            <div className="ms-4">
                                <h5>Diseño Web  </h5>
                                <p>Diseño de tiendas online, con la mejor tecnología y experiencia de usuario.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="info-box">

                        <h1><FcIdea 
                        size="2em"
                        /></h1>
                        
                            <div className="ms-4">
                                <h5>Servicios de comunicación y marketing</h5>
                                <p>
                                    Diseño de páginas web, tiendas online, aplicaciones móviles, desarrollo de software a medida, marketing digital, posicionamiento web, diseño gráfico, etc.
                                </p>
                                    
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="info-box">
                            <img src="../src/assets/img/icon5.png" alt=""/>
                            <div className="ms-4">
                                <h5>UX/UI</h5>
                                <p>
                                Generamos innovación digital a través de diferentes conjuntos de factores y elementos relacionados a la interacción del usuario con un entorno digital.
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

<Banner/>






</>

  )  
  
}
