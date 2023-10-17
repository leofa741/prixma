import { Box, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Milestone } from '../milestone/Milestone'
import { Portfolio } from '../servicedisweb/Portfolio'
import './magnament.css'
import { MagnamentServices } from './MagnamentServices'

import video from '../../assets/videos/crm.mp4';


export const MagnamentSystemComponent =(props) => {
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
    video={video}
        title="Sistema de Gestión"
        descripcion="Sistema de gestión para distribuidores de productos de consumo masivo, con el cual podrás administrar tu inventario de manera eficiente y segura de forma online ."
        />

        <div className="container">
            <div className="row">
            <div className="col-md-6">
                    <h2 className="text-center">Sistema de Gestión</h2>
                    <p className="text-center">Sistema de gestión para distribuidores de productos de consumo masivo, con el cual podrás administrar tu inventario de manera eficiente y segura de forma online .</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Reportes en pdf </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Codigo de barra para cada producto a la venta</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Gestión de roles de usuarios como | Admin | Ventas | otros </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Ingresos y Egresos de stock deposito</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Proveedores</p>            
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Reportes en tiempo real al admin</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Todo online y seguirdad con token </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Más...</p>
               
                </div>
                <div className="col-md-6">
                  <div className="card-img-magnament">
                  <div class="contenedor-texto">
                    <p>
                      <h3>¿Qué es un sistema de gestión?</h3>
                      <br/>
                      Un sistema de gestión es un conjunto de procesos que se encargan de administrar los recursos de una empresa, con el fin de lograr los objetivos de la misma.
                      .</p>
                    </div>
                  </div>
                   
                </div>
              
                
            </div>
        </div>


<MagnamentServices />



        <Milestone
        title="Mantén la innovación cerca"
        descripcion="La innovación es la clave para el éxito de cualquier empresa.
        Mantén la innovación cerca de tu empresa, con el sistema de gestión de inventario de productos de consumo masivo, podrás administrar tu inventario de manera eficiente y segura de forma online."
        />

    
    </>

  )
}
}
