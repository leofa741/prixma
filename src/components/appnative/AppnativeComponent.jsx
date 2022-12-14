import React, { useEffect, useState } from 'react'
import { Banner } from '../banner/Banner'
import { Header } from '../ecomerce/Header'
import { Testimonial } from '../testimonial/Testimonial'
import Filter3Icon from '@mui/icons-material/Filter3';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import { Portfolio } from '../servicedisweb/Portfolio'
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import { Box, LinearProgress } from '@mui/material';

export const AppnativeComponent=(props) => {
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
        
        else{
  return (
    <>
    <Header
    title="App Native"
    descripcion="Desarrollo de aplicaciones nativas para Android e IOS, con el fin de brindar una experiencia de usuario única y
    una interfaz de usuario atractiva y fácil de usar."
    />

<div className="container-xxl py-6" id="about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0"><AppShortcutIcon 
                            style={{ fontSize: 100 }}
                            variant="outlined" color="primary" 
                            tex
                            />  </h1>   <p>App Para la gestion de delivery</p>     
                         </div>
                        <h3 className="lh-base mb-0">Software mobile </h3>                     
                    </div>
                    <p className="mb-1"><i className="far fa-check-circle text-primary me-3"></i>Rotiserias </p>  
   
   <p className="mb-1"><i className="far fa-check-circle text-primary me-3"></i>Restaurantes</p>     
   <p className="mb-1"><i className="far fa-check-circle text-primary me-3"></i>Pizzerias</p>      
   <p className="mb-1"><i className="far fa-check-circle text-primary me-3"></i>Envios a domicilio</p>  

                    <p className="mb-4">
                        <br/>
                    es un producto que permite a los usuarios acceder a la información y a los servicios de una empresa a través de dispositivos móviles, como teléfonos inteligentes y tabletas.
                    </p>
                    <p className="mb-4">El usuario puede buscar información del menú o los 
                    menú del día de un restaurante, y realizar pedidos de comida a domicilio,
                    </p>

                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>compuesta por varias secciones </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>que se pueden desplazar horizontalmente para ver más contenido</p>
                    
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i> Diseño profesional</p>                    
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se puede integrar con redes sociales</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se descarga desde la tienda de aplicaciones</p>
                     
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>De Facil lectura y asimilación de la info </p>
                   
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Conduce a los clientes potenciales hacia botones de contacto</p>

                    <a className="btn btn-primary py-3 px-5 mt-3" 
                    href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20el%20desarrollo%20de%20una%20app%20mobile"
                    target="_blank" rel="noreferrer">Solicitar</a>
                   
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                            <div  className="imagenapp" ></div>
                        
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">VALOR</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$ 68.000</h2>
                    </div>
                    <p className="mb-4">El precio incluye el desarrollo de la aplicación, el diseño de la interfaz de usuario y la publicación en la tienda de aplicaciones.</p>

                   
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">ABONO MENSUAL</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$ 6.500</h2>
                    </div>
                    <p className="mb-0">¿Qué incluye el Abono mensual?</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Hosting | Alojamiento de su App en Internet.</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Dominio | te registramos tu dominio</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Actualizaciones | Actualización de tu página web. Actualización de imágenes y textos según tu necesidad</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>SSL | Certificación para que tu página web sea segura</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Seguridad | Protección de tu página web contra ataques de hackers</p>            
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Soporte | En caso de que tu sitio sufra algún inconveniente técnico,lo resolveremos por vos</p>

                </div>
            </div>
        </div>
    </div>
    <Banner />

    <Portfolio
    title="Software mobile"
   descripcion="Nuestros trabajos son de calidad y con un diseño profesional"
    />  
    
    </>
  )
}
}