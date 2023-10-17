import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './testimonial.css'




export const Testimonial = () => {
  return (
      <> 
       <section id="testimonials" >
        
        
          <div className="overlay">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title-1">                            
                              <h2> Contáctanos </h2>                            
                              </div>                                              

                                  <div className="testimonials-item">
                                        <div className="testimonials-item-image">
                                           <a href="https://wa.me/+541536038167"   target="_blank"   rel="noreferrer" >
                                            <WhatsAppIcon 
                                            className="img" 
                                            size="6em" 
                                             /></a>                                                                                   
                                        </div>                                   
                                    </div>                                
                                  </div>               
                             </div>
                          </div>     
                      </section>
          
      </>
  )
}
