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
                  diseño de ecommerce
                </h3>
                <p>
                  Si estás buscando vender por internet, o transformar tu página web en una verdadera herramienta de ventas.
                  te ayudamos a diseñar tu tienda online.,
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
