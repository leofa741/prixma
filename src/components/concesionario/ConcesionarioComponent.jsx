import { Box, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Banner } from '../banner/Banner'
import { Header } from '../ecomerce/Header'
import { Portfolio } from '../servicedisweb/Portfolio'
import { Testimonial } from '../testimonial/Testimonial'
import { CardConcesionaria } from './CardConcesionaria'
import { ContenidoCars } from './ContenidoCars'

import CustomizedTimeline from './TimelineConc'
import video from '../../assets/videos/carsonline.mp4';
import { HeaderServices } from '../headerservices/HeaderServices'

export const ConcesionarioComponent = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {

    customFetch(2000, productos).then((data) => setItems(data));
  }, []);

  if (items.length === 0) {
    return (
      <div className="container">

        <div className="row justify-content-center">
          <div className="about-section">
            <div className="col-md-12">
              <h4 className="text-center"> {props.title}</h4>
              <p className="text-center">Somos los Puentes Digitales de tus proyectos, con más de 10 años de experiencia en el mercado ofreciendo soluciones tecnológicas a medida para empresas de todos los tamaños. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>
            </div>

            <Box sx={{ width: "100%" }}>

              <LinearProgress />
              <br></br>
            </Box>
          </div>
        </div>
      </div>
    );
  }

  else {
    return (
      <>

        <Portfolio
          video={video}
          title="Online Cars"
          descripcion="Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden administrar 
         los vehículos que se encuentran en stock, los que se encuentran en venta y los que se encuentran en alquiler."  />

        <HeaderServices
          title="Valor y calidad más allá de la tecnología"
          descripcion="Diseñamos soluciones efectivas basando todo nuestro proceso en la evidencia de los datos para optimizar la toma de decisiones.

          Realizamos investigaciones con usuarios finales, ejecutamos pruebas de usabilidad, analizamos métricas y examinamos mapas de calor."
        />
        <CardConcesionaria />

        <ContenidoCars />
        < CustomizedTimeline />
        <Banner />

        <Testimonial />
      </>
    )
  }
}
