import React from 'react'
import { ContentServives } from './ContentServives'
import video from '../../assets/videos/servicio1.mp4';
import { Portfolio } from '../servicedisweb/Portfolio';
export const PrincipalServices = () => {
  return (
 <>
  <Portfolio
          video={video}
          title='Nuestros Servicios'
          descripcion='Nuestros servicios son la solución a tus necesidades de negocio, ofrecemos servicios de desarrollo de software, diseño web, marketing digital, consultoría tecnológica, outsourcing de innovación y transformación digital, entre otros.'
        />

 <ContentServives 
  title="PRINCIPALES SERVICIOS ELEGIDOS POR NUESTROS CLIENTES"
 
 />
 
 
 </>
  )
}
