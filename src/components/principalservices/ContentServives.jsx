import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import './contentservices.css'
import { ImagenCard } from './ImagenCard';

export const ContentServives = (props) => {
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
                        <p className="text-center">Somos los Puentes Digitales de tus proyectos.</p>
              
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
        
        else{

    return (
        <>
            <div className="cards-1">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-12">                      
                            <h2 className="h2-heading"
                            style={{
                            color: "black",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize:{xs:"1.5rem", sm:"2rem", md:"2.5rem", lg:"3rem", xl:"3.5rem"},
                            fontFamily: "Roboto",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            textShadow: '4px 4px 9px #000000', 
                            }}>
                                Nuestros servicios
                            </h2>
                                                    
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-lg-4">

                            <div className="card animacion-block">
                                <div className="card-image animacion-block">
                                         <ImagenCard
                                        url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/description-1.png?raw=true"}
                                          />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-titl">Sistemas web a medida</h4>
                                    <p>Desarrollamos tu sistema personalizado. Desarrollamos intranet, extranet, portales, portfolios ¡y más! Contanos tu proyecto, seguro podemos ayudarte</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="card animacion-block">
                                <div className="card-image animacion-block">
                                    <ImagenCard
                                        url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/E-Commerce.png?raw=true"}
                                            />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">E-commerce</h4>
                                    <p>Creamos tu tienda online. con diseño profesional, sin comisiones por ventas y a medida. Gestioná tus ventas minoristas y mayoristas.Metodos de cobros paypal, creditcard  ¿Querés hacer crecer tu negocio? conocé más y tené tu propia tienda online llave en mano</p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-4">

                            <div className="card animacion-block">
                                <div className="card-image animacion-block">
                                <ImagenCard
                                        url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/description-2.png?raw=true"}
                                            />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Sitios web & Landing Page</h4>
                                    <p>Diseñamos tu sitio web o landig Page. Somos expertos en diseño y usabilidad. Mejoramos la experiencia de navegación de tus clientes y aumentamos la visibilidad de tus productos. Tu Sitio Web o Landing Page está a un clic de volverse realidad.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                              {/* ---- */}

                      <div className="row">
                        <div className="col-lg-4">

                            <div className="card animacion-block">
                                <div className="card-image animacion-block">
                                <ImagenCard
                                        url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/image1-4.png?raw=true"}
                                            />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">App móvil</h4>
                                    <p>Tu aplicación para iOS y Android . Si querés lanzar un proyecto único,o facilitar y automatizar tus procesos, la mejor opción es una app. Amigable, poderosa, flexible y 100% escalable.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">

                            <div className="card animacion-block">
                                <div className="card-image animacion-block">
                                <ImagenCard
                                        url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/Mobile-UI-UX-Design.png?raw=true"}
                                            />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">Diseño UX/UI</h4>
                                    <p>Tu plataforma digital es el nexo directo con tu público. Por eso la experiencia de usuarios debe ser óptima, para que tus valores se reflejen en tu producto o servicio. Potenciamos adaptando las etapas de interacción según: el rubro, las capacidades de tu audiencia </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                             <br />
                                <br />
                                <br />
                            <div className="card animacion-block">
                                <div className="card-image animacion-block">
                                <ImagenCard
                                        url={  "https://raw.githubusercontent.com/leofa741/prixma/master/src/assets/img/services/producto3.webp"}  />
                                </div>
                                <br />
                                <br />
                                <br />
                                <div className="card-body">
                                    <h4 className="card-title"> CRM de gestion</h4>
                                    <p>
                                    Sistema de gestión para tu empresa. Te ayudamos a optimizar tus procesos y a mejorar la comunicación interna. Conectamos tus áreas de trabajo y automatizamos tareas.
                                       </p>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>


        </>
    )
}
}
