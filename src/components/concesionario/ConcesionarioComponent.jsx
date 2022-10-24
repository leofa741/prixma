import React from 'react'
import { Header } from '../ecomerce/Header'
import { Testimonial } from '../testimonial/Testimonial'
import { CardConcesionaria } from './CardConcesionaria'
import './imgborder.css'

export const ConcesionarioComponent = () => {
  return (
 <>
 <Header
  title="Concesionarios Online"
  descripcion="Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden administrar 
  los vehículos que se encuentran en stock,
  los que se encuentran en venta y los que se encuentran en alquiler."
  
  />


<CardConcesionaria />

<div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="img-border">
                      <div className="img-border-img"/>
                     
                     
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h6 className="section-title bg-white text-start text-primary pe-3">Concesionaria web</h6>
                        <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                        <p>
                        Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden administrar
                          los vehículos que se encuentran en stock, los que se encuentran en venta .


                        </p>
                        <p className="mb-4">
                      por medio de un sistema web, se puede administrar los vehículos y contar con un control de inventario.
                      también poseer un portal web para que los clientes puedan ver los vehículos que se encuentran en stock.

                        </p>
                        <p>
                          facilidad de uso, con un diseño moderno y atractivo, se puede administrar los vehículos .

                        </p>
                        <div className="d-flex align-items-center mb-4 pb-2">
                            {/* <img className="flex-shrink-0 rounded-circle" src="../../../../icon3.png" alt="" style= 
                            {{width: "80px"}}/> */}
                            <div className="img-icon"/>
                           
                            <div className="ps-4">
                                <h6>Jhon Doe</h6>
                                <small>SEO & Founder</small>
                            </div>
                        </div>
                        <a 
                        href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20los%20concesionarios%20online"
                         className="btn btn-primary">Contactanos</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
 <Testimonial />
 </>
  )
}
