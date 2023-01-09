import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear()

  return (
   <>
      <footer>

        <div className="footer-top text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h4 className="navbar-brand">Puentes Digitales<span className="dot">.</span></h4>
                        <p>
                            somos una empresa de desarrollo de software enfocada en la creación de soluciones digitales para empresas y emprendedores.

                        </p>
                        <div className="col-auto social-icons">
                            <a href="https://www.facebook.com/www.puentesdigitales.com.ar"><i className='bx bxl-facebook'></i></a>
                            {/* <a href="#"><i className='bx bxl-twitter'></i></a> */}
                            <a href="https://www.instagram.com/puentesdigitales.com.ar/"><i className='bx bxl-instagram'></i></a>
                            <a href="https://www.linkedin.com/in/leonardofdev/"><i className='bx bxl-linkedin'></i></a>
                        </div>
                        {/* <div className="col-auto conditions-section">
                            <a href="#">privacy</a>
                            <a href="#">cookies</a>
                            <a href="#">contáctanos</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
       
        <div className="footer-bottom text-center">
            <p className="mb-0">Copyright {year} © Puentes.Digitales. All rights reserved.     

            <a   href="https://www.puentesdigitales.com.ar/">Puentes Digitales</a>
            </p>
            
        </div>
    </footer>


   
   </>
  )
}
