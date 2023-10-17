import React from 'react'
import './follows.css'

export const Follows = ({title,descrip}) => {
  return (
    <section id="social" className="parallax">
    <div className="overlay">
        <div className="container">
         
            
                <div className="info">
                    <h2  className="text-center"   >{title}</h2>
                    <h6  className="text-center"       >{descrip}</h6>
                </div>             
               
            </div>
        </div>
   
</section>
  )
}
