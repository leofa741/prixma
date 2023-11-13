import React, { useEffect, useState } from 'react'
import { Portfolio } from './Portfolio'
import { LandinPage } from './LandinPage'
import { Personalizada } from './Personalizada'
import { WebEconomica } from './WebEconomica'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Box, LinearProgress } from '@mui/material'
import video from '../../assets/videos/disweb.mp4';
import { FlipCard } from '../flipcard/FlipCard'
import { Testimonial } from '../testimonial/Testimonial'
import { HeaderServices } from '../headerservices/HeaderServices'
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
                      <p className="text-center">Somos los Puentes Digitales de tus proyectos.</p>            
              </div>      
            
              <Box sx={{ width: "100%"  }}>          
                <LinearProgress />
                <br />
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
        title="Unimos el mundo físico con el digital"
        descripcion="Generamos por medio de la tecnología, soluciones de
         innovación digital a través de diferentes conjuntos de factores y elementos relacionados a la interacción del usuario con un entorno digital." 
        />     

      <HeaderServices
        title="Diseño Web"
        descripcion="Somos los Puentes Digitales de tus proyectos."
      />

  
      <FlipCard />


      <LandinPage />
      <WebEconomica />
      <Personalizada />
      <br/>
      <Testimonial />

    </>
  )
}
}
