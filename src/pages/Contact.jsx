import React from 'react'
import { FormContact } from '../components'
import { Follows } from '../components/folloows/Follows'
import video from '../assets/videos/contact-us.mp4';
import { Portfolio } from '../components/servicedisweb/Portfolio';


import { ContactCardPres } from '../components/contact/ContactCardPres';



export const Contact = () => {
  return (
    <>
      <Portfolio video={video}
        title="Contáctanos"
        descripcion="Estamos para ayudarte, contáctanos y te responderemos a la brevedad."
      />
      
      <FormContact />
      <br/>
      <div style={{ textAlign: 'center', marginTop: '50px'  }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <ContactCardPres />


            </div>
          </div>
        </div>

      </div>

      <Follows />


    </>
  )
}
