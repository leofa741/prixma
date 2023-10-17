import React from 'react'

export const Footer = () => {

    const year = new Date().getFullYear()

  return (

   <>
   <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <footer>

        <div className="footer-top text-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h4 className="navbar-brand"
                        style={{  color: "white",
                        fontFamily: "sans-serif",
                        fontSize: "17px",
                        fontWeight: "bold",
                        textAlign: "center",
                        textShadow: "2px 2px 4px #000000",
                        textTransform: "uppercase",
                        letterSpacing: '0.2rem',
                        
                        textDecorationColor: "white",
                        textDecorationStyle: "solid",
                        textDecorationThickness: "15px",
                        textUnderlineOffset: "10px",
                        textRendering: "optimizeLegibility",
                        textOrientation: "upright",
                        textOverflow: "clip",
                        textIndent: "7px",
                        textJustify: "auto",
                        textKashida: "auto",
                        textKashidaSpace: "0px",
                        textAnchor: "start",
                        textEmphasis: "none",
                        textEmphasisColor: "currentcolor",
                        textEmphasisStyle: "none",
                        textEmphasisPosition: "over right",              
                        textEmphasisCustom: "none",
                        textCombineUpright: "none",
                        textOrientationVertical: "mixed",

                          }}>
                        Puentes Digitales</h4>
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
            <p className="mb-0"> ©  2009 - {year} Puentes.Digitales. All rights reserved.     

           
            </p>
            
        </div>
    </footer>


   
   </>
  )
}
