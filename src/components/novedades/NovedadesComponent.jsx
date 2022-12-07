import { Box, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import { Testimonial } from '../testimonial/Testimonial'

import './novedades.css'

export const NovedadesComponent =(props) => {
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
      
            
              <Box sx={{ width: "100%" }}>
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
      <div className="novedades">
        <div className="novedades__container">
          <div className="novedades__container__title">
            <h2>Novedades</h2>
          </div>
          <div className="novedades__container__cards">
            <div className="novedades__container__cards__card">
              <div className="novedades__container__cards__card__img">
                <div className="novedades__container__cards__card__img__img">
                </div>
              </div>

              <div className="novedades__container__cards__card__text">
                <h3>
                 Porque tener un sitio web es importante para tu negocio
                </h3>
                <p>
                  En la actualidad, tener un sitio web es una necesidad para cualquier negocio, ya que es la mejor forma de dar a conocer tu empresa, tus productos y servicios, y de llegar a más clientes potenciales.

                  La mayoría de las personas que buscan algún producto o servicio, lo hacen a través de internet, por lo que si no tienes un sitio web, estás perdiendo la oportunidad de llegar a muchos clientes potenciales.

                  Además, tener un sitio web te permite tener un mayor control sobre tu negocio, ya que puedes actualizar la información de tu empresa, tus productos y servicios, y tus redes sociales, de manera rápida y sencilla.

                  Por otro lado, tener un sitio web te permite tener una presencia en internet las 24 horas del día, los 7 días de la semana, lo que te permite llegar a más clientes potenciales, y aumentar tus ventas.

                  Contactanos y te ayudaremos a crear un sitio web para tu negocio.



              
               
                </p>
              </div>
            </div>
          </div>
        </div>
         </div>
      <Testimonial />
    </>
  )
}
}
