import React from 'react'
import './timelinecomponent.css'

export const TimeLineComponent = () => {
  return (
    <>
<div 
className="containerdiv">

  <p  className="text-center-p"  ><h2>Compras Virtuales </h2>
Evita filas presenciales. Distanciamiento Social Mejor Experiencia Mejor uso de Recursos.</p>
  <p  className="text-center-p"  ><h2>Omnicanal </h2>
Múltiples Dispositivos. Cualquier momento y lugar. Integración de registro con Facebook.
Notificaciones efectivas.</p>
  <p  className="text-center-p"  ><h2>Extensible </h2>
Agrega nuevos productos y servicios. Aumenta la oferta. Incrementa la rentabilidad.</p>

  <p  className="text-center-p"  ><h2>
  Seguridad </h2> 
  Protección de datos. Protección de pagos. Protección de la información.</p>   

  <p  className="text-center-p" 
  style={{
  color: "black",
  textAlign: "center",
  fontWeight: "bold",
  fontSize:{xs:"0.5rem", sm:"0.7", md:"0.9rem", lg:"3rem", xl:"3.5rem"  },
  fontFamily: "Roboto",
  textTransform: "uppercase",
  writingMode: "vertical-rl" ,
  textOrientation: "upright",

  letterSpacing: "0.05rem",
  textShadow: '4px 4px 9px #000000',
  }}
   >
  <a href="https://wa.me/+5491136038167?text=Hola%20quisiera%20saber%20m%C3%A1s%20sobre%20el%20servicio%20de%20ecommerce%20de%20puentes%20digitales" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Contactar</a>

  </p>
  
</div>
    </>
  )
}
