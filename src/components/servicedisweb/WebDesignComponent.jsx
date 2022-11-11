import React, { useEffect, useState } from 'react'
import { Portfolio } from './Portfolio'
import { LandinPage } from './LandinPage'
import { Personalizada } from './Personalizada'
import { WebEconomica } from './WebEconomica'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Box, LinearProgress } from '@mui/material'

export const WebDesignComponent =(props) => {
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
   
      <Portfolio
        title="Diseño Web" 
        descripcion="Diseño web personalizado, con la mejor tecnología y con un diseño único y exclusivo para tu empresa, negocio o proyecto." 
        />        

      <LandinPage />
      <WebEconomica />
      <Personalizada />
      

    </>
  )
}
}
