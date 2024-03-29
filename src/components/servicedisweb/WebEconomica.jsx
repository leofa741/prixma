import React from 'react'
import Filter2Icon from '@mui/icons-material/Filter2';
import './imagen.css'

export const WebEconomica = () => {
  return (
    
    <>
    <div className="container-xxl py-6" id="about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                        <h1 className="display-1 mb-0"><Filter2Icon
                            style={{ fontSize: 100 }}
                            variant="outlined" color="primary" 
                            tex
                            /></h1>
                           
                        </div>
                        <h3 className="lh-base mb-0">WEB 4 </h3>
                    </div>
                    <p className="mb-4">Página web de 4 secciones, con un diseño moderno y profesional, adaptado a cualquier dispositivo... </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>compuesta por 4 Sección </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Web económica de 4 secciones</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se ve toda la información de tu página en una sola pantalla</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se puede integrar con redes sociales</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se puede integrar con Google Analytics</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>De Facil lectura y asimilación de la info </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se adapta a cualquier dispositivo</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Conduce a los clientes potenciales hacia botones de contacto</p>

                    <a className="btn btn-primary py-3 px-5 mt-3" 
                    href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20la%20pagina%20web%20economica%20de%204%20secciones"
                    target="_blank" rel="noreferrer">Solicitar</a>
                   
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                            <div  className="imagen2" ></div>
                        
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">VALOR</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$75.000</h2>
                    </div>
                    <p className="mb-4">El valor de la página, incluye el dominio y actualizaciones de la info </p>                 
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">ABONO MENSUAL</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$9.000</h2>
                    </div>
                    <p className="mb-0"

                    style={{color: 'black',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    fontFamily: 'sans-serif',
                    textShadow: '1px 1px 10px black',


                         }}>¿Qué incluye el Abono?</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Hosting | Alojamiento de su página web en Internet.</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Dominio | te registramos tu dominio | tiene costo anual</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Actualizaciones | Actualización de tu página web. Actualización de imágenes y textos según tu necesidad</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>SSL | Certificación para que tu página web sea segura</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Seguridad | Protección de tu página web contra ataques de hackers</p>            
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Soporte | En caso de que tu sitio sufra algún inconveniente técnico,lo resolveremos por vos</p>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
