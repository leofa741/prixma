import React, { useEffect, useState } from 'react'
import { Banner } from '../banner/Banner'
import { Slider } from '../slider/Slider'
import { Testimonial } from '../testimonial/Testimonial'
import { Link} from "react-router-dom";
import './servicecomponent.css'
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import { Box, LinearProgress } from '@mui/material';


export const ServicesComponent=(props) => {
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
    <Slider /> 
  <section id="services" className="text-center">

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="intro">                     
                        <h1>¿Qué hacemos?</h1> 
                          <p className="mx-auto">
                        Nos especializamos en Outsourcing y Transformación Digital, brindando soluciones integrales a nuestros clientes.


                        </p>
                    </div>
                </div>
            </div>

            <div className="row g-4">     
                         <div className="col-lg-4 col-md-6">
                    <div className="service">                   
                        <h5>Concesionarios de vehiculos</h5>                        
                        <p>
                         Podran administrar el inventario de sus vehiculos de manera eficiente y segura de forma online con su tablet, o su dispositivo movil.
                        </p>
                        <span    className="btn btn-dark  "><Link to="/concesionarioweb"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>  
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                       
                        <h5>Gráfica </h5>
                        <p>
                      Creamos tu imagen corporativa, desde el logo hasta la imagen grafica de tu empresa,como ploteos y rotulacion de vehiculos.
                      corporeos y máss..
                        </p>
                        <span    className="btn btn-dark  "><Link to="/design"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>  
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">
                     
                        <h5>Sistema de Gestión de Turnos</h5>                              
                        <p>
                        Es un sistema que permite a los clientes de una empresa o institución solicitar un turno para ser atendidos.

                       </p>
                        <a href="#" className="btn btn-dark  ">Leer más</a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">                
                        <h5>Diseño Web</h5>
                        <p>
                        El diseño web es el proceso de creación de sitios web. Este puede incluir el diseño, la programación y la publicación.
                        </p>
                        <span    className="btn btn-dark  "><Link to="/webdesign"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>                      
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">             
                        <h5> E Comerce</h5>
                        <p>
                        El  e-commerce, es la compra y venta de productos o servicios a través de Internet.
                        </p>
                        <span    className="btn btn-dark  "><Link to="/ecomerce"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">             
                        <h5> Gestion de Presupuestos</h5>
                        <p>
                       Presupuestos de servicios y productos .
                       con ingreso de datos e impresion de presupuestos.
                        </p>
                        <span    className="btn btn-dark  "><Link to="/ecomerce"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">             
                    <h5> App Pedidos Menú</h5>
                    <h5>   IOS - Android</h5>
                    <div className="appstory"/>         
                        <p>Aplicacion para pedidos y envios de menú gastronomico.  </p>                    
                        <span    className="btn btn-dark  "><Link to="/appnative"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">             
                        <h5>Turnero Digital</h5>
                         <p>Llamador de turnos por pantalla digital.<br/><br/>Brinde un mejor servicio a sus clientes.
                            de forma eficiente y profesional.<br/><br/>Clinicas, Sanatorios, Hospitales, Consultorios Médicos
                            y Odontológicos, Estudios Jurídicos, Administraciones Públicas, etc.
                            </p>
                        
                        <span    className="btn btn-dark  "><Link to="/shiftmagnamentsystem"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div className="service">                   
                        <h5>  Sistema de gestión de compras y ventas</h5>                        <p> 
                            Sistema de gestión de compras y ventas, que permite la gestión de los procesos de compras y ventas de una empresa, desde la solicitud de cotización hasta la facturación de la venta.
                            con notificaciones en tiempo real, y un sistema de gestión de inventario.codigos de barras, y máss...
                        </p>                   
                        <span    className="btn btn-dark  "><Link to="/magnamentsystem"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <Banner />
    <Testimonial />

 

    </>
  )
}
}
