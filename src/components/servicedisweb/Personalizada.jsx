import React from 'react'
import Filter3Icon from '@mui/icons-material/Filter3';
import './imagen.css'
export const Personalizada = () => {
  return ( <>
    <div className="container-xxl py-6" id="about">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-5">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0"><Filter3Icon 
                            style={{ fontSize: 100 }}
                            variant="outlined" color="primary" 
                            tex
                            /></h1>
                           
                       
                           
                        </div>
                        <h3 className="lh-base mb-0">SEC. VARIAS</h3>
                    </div>
                    <p className="mb-4">
                    Creamos la página web para tu negocio. Diseño web profesional, moderno y adaptable a cualquier dispositivo.
                    página web con las ultimas tecnología de vanguardia, te ofrecemos un diseño personalizado que se adapte a tus necesidades. Este servicio incluye diseñador gráfico, que realice el diseño de tu página, programador web que transforma ese diseño en una página web funcional y optimizada para los buscadores, y un asesor SEO que te ayude a posicionar tu página web en los primeros resultados de Google.
                    </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>compuesta por varias secciones </p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Web adaptable a dispositivos</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i> Diseño web profesional</p>                    
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se puede integrar con redes sociales</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Se puede integrar con Google Analytics</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>De Facil lectura y asimilación de la info </p>
                   
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Conduce a los clientes potenciales hacia botones de contacto</p>

                    <a className="btn btn-primary py-3 px-5 mt-3" 
                    href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20el%20servicio%20de%20diseño%20web%20personalizado"
                    target="_blank" rel="noreferrer">Solicitar</a>
                   
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4">
                    <div className="col-sm-6">
                            <div  className="imagen1" ></div>
                        
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">VALOR</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$95.000</h2>
                    </div>
                    <p className="mb-4">El precio incluye el diseño de la página web, el desarrollo de la misma y el posicionamiento SEO.</p>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-3 mb-0">ABONO MENSUAL</h5>
                        <h2 className="text-primary fw-bold mb-0" data-toggle="counter-up">$12.000</h2>
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
