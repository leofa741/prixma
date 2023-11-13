import React from 'react'
import './headerservices.css'

import imag from '../../assets/img/project1.jpg'

export const HeaderServices = ({ title ,descripcion}) => {
    return (
        <> 
        <div className="bannersection">
            <div className="container">            
                <div className="row justify-content-center">   
        
                    <div className="col-lg-6 py-5">
                        <div className="">
                            <div className="col-12">
                            <h2>{title}</h2>
                                <div className="binfo-box">                                                              
                                        <p>{descripcion}</p>                                 
                                </div>
                            </div>                         
                        </div>
                    </div>        
        
                    <div className="col-lg-5 contenedor">        
                        <div className="baner-img" >
                          <h1 className="text-center-img"
                            style={{
                                color: '#ffffff !important',
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                fontFamily: 'Roboto',
                                textShadow: '4px 4px 9px #ffffff',
                                textTransform: 'uppercase',
                                letterSpacing: '0.3rem',
                                lineHeight: '1.6rem',
                                textAlign: 'center',
                                textJustify: 'inter-word ',                          
                                }} ><br /> <br /> 
                                Te Invitamos a Conocer Nuestros Servicios                             
                            </h1>  
                        </div>               
                    </div>
                </div>
            </div>
        </div>
     
        </>
    )
}
