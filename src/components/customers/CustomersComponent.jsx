import { Box, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Header } from '../ecomerce/Header'
import { Milestone } from '../milestone/Milestone'
import { TextpenduloComponent } from '../textopendulo/TextpenduloComponent'
import { CarrouselComponent } from './CarrouselComponent'
 






export const CustomersComponent =(props) => {
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
   <Header
    title='Nuestros Clientes'
    descripcion='Nuestros clientes son nuestra mejor carta de presentación'
    />
    <br/>
    <br/>
  <TextpenduloComponent 
  title='En Construcción'
  />
   <br/>
    <br/>
    <br/>
    <br/>
    <Milestone
    title='Mantén la innovación cerca'
    descripcion='La innovación es la clave para el éxito de cualquier empresa.
    Mantén la innovación cerca de tu empresa, con el sistema de gestión de inventario de productos de consumo masivo, podrás administrar tu inventario de manera eficiente y segura de forma online.'
    />
        
   
   </>
  )
}
}