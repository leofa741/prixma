import React from 'react'
import './magnament.css'

export const MagnamentServices = () => {
  return (
    <>
     <div className="container-fluid  my-5 py-6" id="service">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-0">
                        <span className="text-primary">Servicios</span> que ofrecemos
                    </h1>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <a className="btn btn-primary py-3 px-5" href="
                    https://wa.me/+541536038167?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios%20de%20desarrollo%20web%20y%20apps%20móviles%20para%20mi%20negocio.
                    " target="_blank" rel="noreferrer">Contáctanos</a>
                </div>
            </div>
            <div className="row g-4">

                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-crop-alt fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">
                                Uso de tecnologías de vanguardia
                            </h4>
                            <h6 className="mb-3">Desarrollo de aplicacion web </h6>
                            <span><p>Desarrollo de aplicaciones web con tecnologías de vanguardia, como Vue.js,MySQL, PHP, Laravel, entre otras.</p>                            
                              </span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 " >
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-code-branch fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Graphic Design</h4>
                            <h6 className="mb-3">
                                Diseño a medida
                            </h6>
                            <span> 
                                Diseñado a medida , con el fin de que tu empresa tenga la facilidad de administrar su inventario de manera eficiente y segura de forma online.

                            </span>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-tablet-alt fa-2x text-dark"></i>
                       
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Múltiples Dispositivos</h4>
                            <h6 className="mb-3"> 
                                Aplicaciones multiplataforma
                             </h6>
                            <span>
                                Desarrollo de aplicaciones multiplataforma, con el fin de que tu empresa tenga la facilidad de administrar su inventario de manera eficiente y segura de forma online.
                               </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-laptop-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Movilidad</h4>
                            <h6 className="mb-3">Sistema Online</h6>
                            <span>
                            Desde cualquier lugar, con cualquier dispositivo y a toda hora se puede acceder a la información de tu empresa.

                               </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
