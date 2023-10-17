import React from 'react'
import './cardconcesionaria.css'
export const CardConcesionaria = () => {
  return (
  <>
  <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-laptop  fa-4x text-primary mb-4" aria-hidden="true"></i>
                        <h5 className="mb-3">Admin Online</h5>
                       
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-users-cog fa-4x text-primary mb-4"></i>
                        <h5 className="mb-3">Registro de Users</h5>
                     
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-check fa-4x text-primary mb-4"></i>
                        <h5 className="mb-3">Control de inventario</h5>
                      
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="fact-item bg-light rounded text-center h-100 p-5">
                        <i className="fa fa-database fa-4x text-primary mb-4"></i>
                        <h5 className="mb-3">Base de Datos </h5>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>



    </>
  )
}
