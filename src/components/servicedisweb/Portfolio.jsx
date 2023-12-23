import React from 'react'

import './portfolio.css';

export const Portfolio = ({video,title,descripcion}) => {

  return (
    <>
  <section className="portfolio video-container" id="portfolio"> 
        <div className="container ">    
            <div className="row">
                <div className="col-12">
                    <div className="intro">
                    <video autoPlay loop muted  
                            style={{width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: "0",
                                     left: "0",
                                     zIndex: "-1"
                                     }} >
                          <source src={video} type="video/mp4"   />
                    </video>
        
                        <div className="title">                  
                        <h1 className="title__primary" data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="100"

                        style={{color: "white",
                        fontSize: "2.5rem",
                        fontWeight: "700",
                        lineHeight: "1.2",
                        marginBottom: "1rem",
                        textTransform: "uppercase",
                        textAlign: "center",
                        textShadow: "0 0 10px #000000"}}                         
                        >{title}</h1>
                        </div>
                        <p className="mx-auto title__secondary"
                        style={{color: "black",                      
                      
                        fontWeight: "400",
                        lineHeight: "1.1",
                        marginBottom: "1rem",
                        textTransform: "uppercase",
                        textAlign: "center",
                        textShadow: "0 0 10px #ffffff"
                              }}
                        > {descripcion}  </p>                       
                    </div>
                </div>
            </div>
        </div>       
    </section>
    </>
  )
}
