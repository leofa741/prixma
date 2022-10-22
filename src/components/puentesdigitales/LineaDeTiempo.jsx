import React from 'react'
import './lineadetiempo.css'

export const LineaDeTiempo = () => {
  return (
    <>
<div className="timeline">

  <div className="containere right">
    <div className="date">2009</div>
    <i className="icon fa fa-desktop"></i>
    <div className="content">
      <h2>Nace Puentes Digitales </h2>
      <p>
        Sin saber que estaba por nacer, nació Puentes Digitales, una empresa de desarrollo de software enfocada en la creación de soluciones digitales para empresas y emprendedores.
     
      </p>
    </div>
  </div>
  <div className="containere left">
    <div className="date">2011</div>
    <i className="icon fa fa-check"></i>
    <div className="content">
      <h2>Un equipo de trabajo</h2>    
      <p>
      ayudando a nuestros clientes a mejorar y crecer sus negocios.
      Fuimos creciendo y aprendiendo, hasta que en 2011 decidimos dar el salto a la web.
        </p>
    </div>
  </div>
  <div className="containere right">
    <div className="date">18 May</div>
    <i className="icon fa fa-running"></i>
    <div className="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>
  <div className="containere left">
    <div className="date">10 Jul</div>
    <i className="icon fa fa-user"></i>
    <div className="content">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>
        Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
      </p>
    </div>
  </div>

</div>
    
    </>
  )
}
