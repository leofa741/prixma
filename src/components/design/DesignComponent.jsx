import React, { useEffect, useState } from 'react'



import { DesignHeader } from './DesignHeader'
import { ServicesDesign } from './ServicesDesign'
import { ServicesHeader } from './ServicesHeader'
import{Milestone} from '../milestone/Milestone'
import { Contenido } from './Contenido'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Box, LinearProgress } from '@mui/material'



export const DesignComponent =(props) => {
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

    <DesignHeader />

    
    <Contenido />
    <ServicesHeader />
    <ServicesDesign />

   

<Milestone 
    title="Nuestro proceso de diseño"
    descripcion="
    Seguimos un proceso de diseño simple para garantizar que ofrecemos los mejores resultados para nuestros clientes."

/>






    
    </>
  )
}
}
