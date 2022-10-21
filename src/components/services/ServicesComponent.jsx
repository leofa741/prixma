import React from 'react'
import { Banner } from '../banner/Banner'
import { Slider } from '../slider/Slider'
import { Testimonial } from '../testimonial/Testimonial'
import { Link} from "react-router-dom";

export const ServicesComponent = () => {



  return (
    <>
    <Slider />
  <section id="services" class="text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                     
                        <h1>¿Qué hacemos?</h1>

                      

                        <p class="mx-auto">

                        Nos especializamos en Outsourcing de Innovación y Transformación Digital para Transformar cualquier tipo de negocio mediante Procesos transversales a nuestras Prácticas

                        </p>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                 
                        <h5>Digital Marketing</h5>
                        <p>
                        El marketing digital es una estrategia de marketing que utiliza Internet para promocionar un producto o servicio.
                        </p>

                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                       
                        <h5>Logo Designing</h5>
                        <p>
                        El diseño de logotipos es un proceso creativo que requiere de una gran cantidad de tiempo y esfuerzo.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                      
                        <h5>Buisness consulting</h5>
                        <p>
                        La consultoría empresarial es un servicio que ayuda a las empresas a mejorar su rendimiento y su competitividad.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                   
                        <h5> Distribución de productos y ventas  </h5>
                        <p>  App para distribución de productos y ventas, con seguimiento de pedidos y reportes en tiempo real.</p>
                   
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                   
                        <h5>Consecionarios de vehiculos</h5>                        
                        <p>
                         Podran administrar sus vehiculos y sus clientes de manera eficiente.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                       
                        <h5>Grafica comercial</h5>
                        <p>
                        La gráfica comercial es un tipo de gráfica que se utiliza para la publicidad y el marketing.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                     
                        <h5>Sistema de Gestión de Turnos</h5>                              
                        <p>
                        Es un sistema que permite a los clientes de una empresa o institución solicitar un turno para ser atendidos.

                       </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                
                        <h5>Diseño Web</h5>
                        <p>
                        El diseño web es el proceso de creación de sitios web. Este puede incluir el diseño, la programación y la publicación.
                        </p>
                        <span    class="btn btn-dark  "><Link to="/webdesign"  
                        style={{ textDecoration: 'none', color: 'white' }}>Leer más</Link></span>
                  
                     
                      
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
             
                        <h5> E Comerce</h5>
                        <p>
                        El  e-commerce, es la compra y venta de productos o servicios a través de Internet.
                        </p>
                        <span    class="btn btn-dark  "><Link to="/ecomerce"  
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
