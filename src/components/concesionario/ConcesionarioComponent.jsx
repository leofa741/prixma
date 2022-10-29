import React from 'react'
import { Banner } from '../banner/Banner'
import { Header } from '../ecomerce/Header'
import { Testimonial } from '../testimonial/Testimonial'
import { CardConcesionaria } from './CardConcesionaria'
import { ContenidoCars } from './ContenidoCars'

import CustomizedTimeline from './TimelineConc'


export const ConcesionarioComponent = () => {
  return (
 <>
 <Header
  title="Concesionarios Online"
  descripcion="Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden administrar 
  los vehículos que se encuentran en stock,
  los que se encuentran en venta y los que se encuentran en alquiler."
  
  />


<CardConcesionaria />

<ContenidoCars />
   < CustomizedTimeline/>
   <Banner />
  
 <Testimonial />
 </>
  )
}
