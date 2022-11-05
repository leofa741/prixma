import React from 'react'
import { Header } from '../ecomerce/Header'
import { Milestone } from '../milestone/Milestone'
import './customers.css'

export const CustomersComponent = () => {
  return (
   <>
   <Header
    title='Nuestros Clientes'
    descripcion='Nuestros clientes son nuestra mejor carta de presentación'
    />
    <br/>
   
   <div className="slider">
			<ul>
				<li>
  <a href='https://www.asesoramientocontable.com.ar/'  alt='Asesoramiento Contable' target='_blank' rel="noreferrer">
  <img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/coustomer-mg.png?raw=true" alt=""/>
  www.asesoramientocontable.com.ar</a>
 </li>
 
 <li>
  <a href='https://www.asesoramientocontable.com.ar/'  alt='Asesoramiento Contable' target='_blank' rel="noreferrer">
  <img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/coustomer-mg.png?raw=true" alt=""/>
  www.asesoramientocontable.com.ar</a>
 </li>
 <li>
  <a href='https://www.asesoramientocontable.com.ar/'  alt='Asesoramiento Contable' target='_blank' rel="noreferrer">
  <img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/coustomer-mg.png?raw=true" alt=""/>
  www.asesoramientocontable.com.ar</a>
 </li>
 <li>
  <a href='https://www.asesoramientocontable.com.ar/'  alt='Asesoramiento Contable' target='_blank' rel="noreferrer">
  <img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/coustomer-mg.png?raw=true" alt=""/>
  www.asesoramientocontable.com.ar</a>
 </li>
			</ul>


		</div>

    <Milestone
    title='Mantén la innovación cerca'
    descripcion='La innovación es la clave para el éxito de cualquier empresa.
    Mantén la innovación cerca de tu empresa, con el sistema de gestión de inventario de productos de consumo masivo, podrás administrar tu inventario de manera eficiente y segura de forma online.'
    />
        
   
   </>
  )
}
