import React from 'react'
import './contact.css'
export const CardContact = (props) => {
  return (
    <>

    <div className="col-lg-8">
      <div className="">
        <div className="card-body">
          <h5 className="card-title-contact"
          style={{color: "#3F3F40 ",
          fontSize: "70px"


        }}
          >{props.title}</h5>
          <p className="card-text"
          style={{color: "#AEAEAF",
           
        }}
          >
         {props.descripcion}
         </p>  
         <div className="btncontact">

          <a  href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios" className="btn-successs">Solicitar</a>    
          </div> 
        </div>
     </div>
    </div>

    </>
  )
}
