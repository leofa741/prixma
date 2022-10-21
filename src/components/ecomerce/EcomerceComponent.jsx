import React from 'react'
import { Header } from './Header'
import { TimeLineComponent } from './TimeLineComponent'
import './imgecomerce.css'
import { Testimonial } from '../testimonial/Testimonial'

export const EcomerceComponent = () => {
  return (
    <>
     <Header  />

     <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">Implementación</h1>
          </div>
          <div className="col-md-9">
          <p className="text-center">
          La implementación de Puentes Digitales 
          consta de un Portal Web de eCommerce y una App Mobile que permita gestionar y comercializar toda la gama de productos que nuestro cliente (proveedor) ofrece.          
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
