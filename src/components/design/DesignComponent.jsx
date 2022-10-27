import React from 'react'



import { DesignHeader } from './DesignHeader'
import { ServicesDesign } from './ServicesDesign'
import { ServicesHeader } from './ServicesHeader'
import{Milestone} from '../milestone/Milestone'



export const DesignComponent = () => {
  return (
    <>

    <DesignHeader />

    <ServicesHeader />

    <ServicesDesign />

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="img-border">
                      <div className="img-border-graf"/>
                     
                     
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                    <h1 className="display-6 mb-4">  <span className="text-primary">Diseño</span>  </h1>
                        <h6 className="section-title bg-white text-start text-primary pe-3">Ploteo - Corte de vinil Adhesivo  </h6>
                        <h6 className="section-title bg-white text-start text-primary pe-3">Corporeos - Corporeos interior-exterior  </h6>
                        <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                        <p>
                          Contamos con maquinaria y equipos que nos permiten realizar trabajos de alta calidad, con diseños originales y creativos, que se ajustan a las necesidades de nuestros clientes.



                        </p>
                        <p className="mb-4">
                          Tambien realizamos cortes de vinil adhesivo, para que puedas decorar tu hogar, oficina o negocio.
                          
                        </p>
                       
                        <div className="d-flex align-items-center mb-4 pb-2">
                         
                            <div className="img-icon"/>
                           
                            <div className="ps-4">
                                <h6> Puentes Digitales</h6>
                                <small>Diseño & Desarrollo</small>
                            </div>
                        </div>
                        <a 
                        href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios"
                         className="btn btn-primary">Contactanos</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

<Milestone 
    title="Nuestro proceso de diseño"
    descripcion="
    Seguimos un proceso de diseño simple para garantizar que ofrecemos los mejores resultados para nuestros clientes."

/>






    
    </>
  )
}
