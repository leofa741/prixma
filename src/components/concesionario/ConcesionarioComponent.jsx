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
                        <img className="img-fluid" src="../src/assets/img/project-2.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                        <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                        <div className="d-flex align-items-center mb-4 pb-2">
                            <img className="flex-shrink-0 rounded-circle" src="../../../../icon3.png" alt="" style= 
                            {{width: "80px"}}/>
                           
                            <div className="ps-4">
                                <h6>Jhon Doe</h6>
                                <small>SEO & Founder</small>
                            </div>
                        </div>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
 <Testimonial />
 </>
  )
}
