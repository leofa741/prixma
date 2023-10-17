import { Box, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import { Portfolio } from '../servicedisweb/Portfolio'
import { LineaDeTiempo } from './LineaDeTiempo'

import video from '../../assets/videos/historia.mp4';
export const OurHistory = (props) => {
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
              <h5>Cargando... </h5>
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
          title='Nuestra Historia'
          descripcion='Nuestra historia es la historia de un sueño, de un sueño que se hizo realidad, de un sueño que se hizo realidad gracias a la perseverancia y el esfuerzo de un grupo de personas que se unieron para hacer realidad un sueño, un sueño que hoy es una realidad, una realidad que se llama Puentes Digitales.'
        />



        <LineaDeTiempo />
      </>

    )
  }
}
