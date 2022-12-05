import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { TimeLineComponent } from './TimeLineComponent'
import './imgecomerce.css'
import { Testimonial } from '../testimonial/Testimonial'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Box, LinearProgress } from '@mui/material'

export const EcomerceComponent =(props) => {
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
      title="E-commerce"
      descripcion="Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden visitar las góndolas virtuales y elegir el producto que necesita agregandolo a su carrito de compras personalizado."
      />

     <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center"
                 style={{color: "#000000", fontSize: "40px", fontWeight: "bold", marginTop: "50px"}}
          >Implementación</h1>
          </div>
          <div className="col-md-9">
          <p className="text-center">
          La implementación de Puentes Digitales 
          consta de un Portal Web de E-commerce que permita gestionar y comercializar toda la gama de productos que nuestro cliente (proveedor) ofrece.          
          </p>
        </div>
        <div className="col-md-3">
          <div className="imgecomerce"/>           
          <h3 className="text-left">Carecteristicas</h3> 
            </div>
      </div>
    </div>

    <TimeLineComponent />

    <Testimonial />


    </>
   
  )
}
}
