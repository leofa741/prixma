import React from 'react'
import './follows.css'

export const Follows = ({title,descrip}) => {
  return (
    <section id="social" className="parallax">
    <div className="overlay">
        <div className="container">
            <div className="row">
            
                <div className="sec-title text-center white wow animated fadeInDown">
                    <h2>{title}</h2>
                    <p>{descrip}</p>
                </div>
                
                {/* <ul className="social-button">
                    <li className="wow animated zoomIn"><a href="#"><i className="fa fa-thumbs-up fa-2x"></i></a></li>
                    <li className="wow animated zoomIn" data-wow-delay="0.3s"><a href="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                    <li className="wow animated zoomIn" data-wow-delay="0.6s"><a href="#"><i className="fa fa-dribbble fa-2x"></i></a></li>							
                </ul> */}
                
            </div>
        </div>
    </div>
</section>
  )
}
