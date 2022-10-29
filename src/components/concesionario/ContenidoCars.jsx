import React from 'react'
import './imgborder.css'
export const ContenidoCars = () => {
  return (
    <>
    
    <div className="container-xl ">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 " >
                    <div className="img-border">
                      <div className="img-border-img"/>
                     
                     
                    </div>
                </div>
                <div className="col-lg-6 " >
                    <div className="h-100">
                    <h1 className="display-6 mb-4">  <span className="text-primary">DataCare</span>  </h1>
                        <h6 className="section-title1 bg-white text-start text-primary pe-3">Concesionaria web</h6>
                        <h1 className="display-6 mb-4">#1 Digital Solution With <span className="text-primary">10 Years</span> Of Experience</h1>
                        <p>
                     Soluciones digitales para concesionarios de vehículos,gestión de inventario,Otorga Acceso a Datos en Tiempo Real,
                      Control de Stock, Control de Ventas, Control de Clientes, Control de Usuarios


                        </p>
                        <p className="mb-4">
                      por medio de un sistema web, se puede administrar los vehículos y contar con un control de inventario.
                      también poseer un portal web para que los clientes puedan ver los vehículos que se encuentran en stock.

                        </p>
                        <p>
                          facilidad de uso, con un diseño moderno y atractivo, se puede administrar los vehículos .

                        </p>
                        <div className="d-flex align-items-center mb-4 pb-2">
                         
                            <div className="img-icon"/>
                           
                            <div className="ps-4">
                                <h6> Puentes Digitales</h6>
                                <small>Diseño & Desarrollo</small>
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
    </>
  )
}
