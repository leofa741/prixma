import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
import project1  from '../../assets/img/project1.jpg'  ;  // <--- 1. Import the image



export const CarouselComponent = ({video1,video2,video3,video4,tituo,parrafo,titulo1,parrafo1,titulo2,parrafo2,titulo3,parrafo3}) => {



  return (
    <>
    <Carousel className="carrousel" indicators={false}  interval={10000}  >

     <Carousel.Item className="video-containerr"  >
        <video autoPlay loop muted   >
        <source src={video1} type="video/mp4"   />
        </video>        
        
      <Carousel.Caption >
        <h1
        style={{color:"white",  
        textShadow: "2px 2px 4px #000000",       
        fontWeight:"bold",
        fontFamily:"sans-serif",
        textTransform:"uppercase",
        letterSpacing:"2px",
        textAlign:"center",
        lineHeight:"1.2",
     
        }}
        >{tituo}</h1>
        <p>{parrafo}</p>
     </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item className="video-containerr" >
    <video autoPlay loop muted   >
        <source src={video2}  type="video/mp4"   />
        </video>

      <Carousel.Caption >
        <h1
           style={{color:"white",  
           textShadow: "2px 2px 4px #000000",         
           fontWeight:"bold",
           fontFamily:"sans-serif",
           textTransform:"uppercase",
           letterSpacing:"2px",
           textAlign:"center",
           lineHeight:"1.2",
        
           }}
        
        >{titulo1}</h1>
        <p>{parrafo1}</p>
        
      </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item className="video-containerr"  >
    <video autoPlay loop muted>
        <source src={video3} type="video/mp4" />
        </video>

      <Carousel.Caption >
        <h1
           style={{color:"white",  
           textShadow: "2px 2px 4px #000000",          
           fontWeight:"bold",
           fontFamily:"sans-serif",
           textTransform:"uppercase",
           letterSpacing:"2px",
           textAlign:"center",
           lineHeight:"1.2",
        
           }}
        >{titulo2}</h1>
        <p>
          {parrafo2}
        </p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item className="video-containerr"  >
    <video autoPlay loop muted>
        <source src={video4} type="video/mp4" />
        </video>

      <Carousel.Caption c>
        <h1
           style={{color:"white",  
           textShadow: "2px 2px 4px #000000",          
           fontWeight:"bold",
           fontFamily:"sans-serif",
           textTransform:"uppercase",
           letterSpacing:"2px",
           textAlign:"center",
           lineHeight:"1.2",
        
           }}
        >{titulo3}</h1>
        <p>
          {parrafo3}
        </p>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  <br/>
  <br/>
  </>
  )
}
