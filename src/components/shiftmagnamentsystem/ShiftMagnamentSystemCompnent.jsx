import React, { useEffect, useState } from 'react'
import { Header } from '../ecomerce/Header'
import { Milestone } from '../milestone/Milestone'
import WebIcon from '@mui/icons-material/Web';
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import { Box, LinearProgress } from '@mui/material';
import { Portfolio } from '../servicedisweb/Portfolio';

import video from '../../assets/videos/crm.mp4';
export const ShiftMagnamentSystemCompnent =(props) => {
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
   <Portfolio
   video={video}
    title="Shift Magnament System"
    descripcion="Brinde un mejor servicio a sus clientes con un sistema de turnos digital."  />


 <div className="container-xxl py-6" id="about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                        <h1 className="display-1 mb-0"><WebIcon
                            style={{ fontSize: 100 }}
                            variant="outlined" color="primary" 
                            tex
                            /></h1>
                            <span className="text-muted">Software Digital Turnero</span>
                          
                        </div>
                        <h1 className="lh-base mb-0">SGT</h1>
                    </div>
                    <p className="mb-4">
                    Es un sistema que permite a los clientes de una empresa o institución solicitar un turno para ser atendidos.
                    Pensado para Bancos, Entidades financieras ,Consultorios Médicos, Hospitales, sanatorios,o cualquier lugar dedicado a la atención de clientes.
                    </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>
                    <strong>Turnero Digital</strong>  Llamador de turnos por pantalla digital. Brinde un mejor servicio a sus clientes.
                     </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>
                    <strong>Facil </strong>  de usar y de instalar.
                    </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se ve toda la información de tu página en una sola pantalla</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>
                    <strong>Seguro</strong>  y confiable.
                    </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>
                    <strong>Soporte</strong>  técnico permanente.
                    </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>
                    <strong>Online</strong>  24/7.
                     </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se adapta a cualquier dispositivo</p>
                  

                    <a className="btn btn-primary py-3 px-5 mt-3" 
                    href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20el%20sistema%20de%20turnos%20digital%20SGT"
                    target="_blank" rel="noreferrer">Solicitar</a>
                   
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4">
                       
                        <div className="col-sm-6">
                            <div  className="imagenturnero" ></div>
                        
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">VALOR</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$ 120.000</h2>
                    </div>
                    <p className="mb-4"> <i className="far fa-check-circle text-primary me-3"></i>Puedes mejorar la atención a tus clientes gracias a nuestro software de gestión de colas</p>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">ABONO MENSUAL</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$ 13.500</h2>
                    </div>
                    <p className="mb-0">¿Qué incluye el Abono mensual?</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Hosting | Alojamiento de su soft en Internet.</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>incorporacion de redes sociales</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Actualizaciones | Actualización web. Actualización de imágenes y textos según tu necesidad</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Archivos alijados en la nube</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se puede gestionar por varios Admin</p>            
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Soporte | En caso de que tu sitio sufra algún inconveniente técnico,lo resolveremos por vos</p>

                </div>
            </div>
        </div>
    </div>


<Milestone
title="Sistema de Gestión de Turnos"
descripcion="Es un sistema que permite a los clientes de una empresa o institución solicitar un turno para ser atendidos."
/>

    </>

  )
}
}
