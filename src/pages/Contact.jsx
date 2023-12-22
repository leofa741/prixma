import React from 'react'
import { FormContact } from '../components'
import { Follows } from '../components/folloows/Follows'
import video from '../assets/videos/contact-us.mp4';
import { Portfolio } from '../components/servicedisweb/Portfolio';



export const Contact = () => {
  return (
    <>
        <Portfolio
    video={video}
        title="Contáctanos"
        descripcion="Estamos para ayudarte, contáctanos y te responderemos a la brevedad."
        />
    <FormContact /> 
    <br />
    <br />
    <h1 style={{textAlign: 'center' }} >Siguenos en nuestras redes sociales </h1>

    <Follows />
    <br />
    <br />
    <br />
    <br /> 
    <br />    
    </>
  )
}
