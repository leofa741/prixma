import React from 'react'



import { DesignHeader } from './DesignHeader'
import { ServicesDesign } from './ServicesDesign'
import { ServicesHeader } from './ServicesHeader'
import{Milestone} from '../milestone/Milestone'
import { Contenido } from './Contenido'



export const DesignComponent = () => {
  return (
    <>

    <DesignHeader />

    <ServicesHeader />

    <ServicesDesign />

   <Contenido />

<Milestone 
    title="Nuestro proceso de diseño"
    descripcion="
    Seguimos un proceso de diseño simple para garantizar que ofrecemos los mejores resultados para nuestros clientes."

/>






    
    </>
  )
}
