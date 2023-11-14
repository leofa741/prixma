import React from 'react'
import { HomeContent} from '../components'
import { CarouselComponent } from '../components/carousel/CarouselComponent'

import videoblocks1 from '../assets/videos/puentesdigitales.mp4';

import videoblocks from '../assets/videos/videoblocks.mp4';



import videoblocks4 from '../assets/videos/videoblocks4.mp4';
import marketing from '../assets/videos/videoblocks3.mp4';
import { HeaderConcavo } from '../components/header/HeaderConcavo';


export const Home = () => {
  return (
   
  <>  
  <CarouselComponent 
  video1={videoblocks1}
  video2={videoblocks}
  video3={videoblocks4}
  video4={marketing}
 
  tituo="Puentes Digitales"
  parrafo="Conectando Ideas, Creando Futuro ."
  titulo1="Unete a Puentes Digitales"
  parrafo1="Para cumplir con las necesidades que requieren los proyectos en tiempo y forma."
  titulo2="CREAMOS TU E-commerce"
  parrafo2="  Desde cualquier dispositivo pueden visitar las góndolas virtuales y elegir el producto agregandolo a su carrito . "
  titulo3="UNLEASHING INNOVATION"
  parrafo3="Brindamos soluciones a emprendedores, pymes y empresas  . "
   />
   <br/>
    <br/>
   
  <HomeContent title="Bienvenidos a www.puentesdigitales.com.ar"/>
  </>
  )
}
