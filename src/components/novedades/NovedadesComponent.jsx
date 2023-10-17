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
                      <h4 className="text-center"
                                  style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                                    fontFamily: 'Roboto',
                                    textShadow: '4px 4px 9px #000000',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.4rem',
                                    lineHeight: '2.5rem',
                                    textAlign: 'center',
                                    textJustify: 'inter-word ',
                                  }}
                      > {props.title}</h4>                 
                      <p className="text-center">Una experiencia sumada a un equipo de trabajo único dan como resultado nuestras áreas de conocimiento.</p>
            
              </div>
      
            
              <Box sx={{ width: "100%" }}>               
                <LinearProgress 
             
                variant="indeterminate"
                />
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
            <h3
            style={{
              color: '#000000',
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
              fontFamily: 'Roboto',
              textShadow: '4px 4px 9px #000000',
              textTransform: 'uppercase',
              letterSpacing: '0.4rem',
              lineHeight: '2.5rem',
              textAlign: 'center',
              textJustify: 'inter-word ',
            }}
            >Novedades</h3>
          </div>
          <div className="novedades__container__cards">
            <div className="novedades__container__cards__card">
              <div className="novedades__container__cards__card__img">
            
              </div>

              <div className="novedades__container__title">

                <div className="novedades__container__title1">
                  <h3>
                  P.Digitales y Gitlab: la alianza para acelerar la Transformación Digital de su negocio

                  </h3>
           

                
                    <div className="descricion">
                      <p>En P.Digitales, junto con Gitlab, transformamos negocios, optimizando y acelerando los procesos de entrega de valor al negocio. 
                        Con el respaldo de nuestro equipo de especialistas certificados en DevOps, 
                        creamos experiencias de trabajo junto a nuestros clientes priorizando iteraciones rápidas y la velocidad de desarrollos,
                         poniendo foco en la eficiencia y en resultados.</p>

                         <p>

                         </p>

                      </div>
                      </div>
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
