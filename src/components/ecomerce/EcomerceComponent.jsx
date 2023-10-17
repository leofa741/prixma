import React, { useEffect, useState } from 'react'
import { Header } from './Header'
import { TimeLineComponent } from './TimeLineComponent'
import './imgecomerce.css'
import { Testimonial } from '../testimonial/Testimonial'
import { customFetch } from '../../database/customfech'
import productos from '../../database/datadb'
import { Box, LinearProgress } from '@mui/material'
import { Portfolio } from '../servicedisweb/Portfolio'
import video from '../../assets/videos/ecomerce.mp4';
import './ecomercecomponent.css'
import { FlipCard } from '../flipcard/FlipCard'
import { HeaderServices } from '../headerservices/HeaderServices'

export const EcomerceComponent = (props) => {
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
          title="Soluciones Web & E-commerce"
          descripcion="Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden visitar las góndolas virtuales y elegir el producto que necesita agregandolo a su carrito de compras personalizado."
        />
        <br />
        <br />
        <br />

        <HeaderServices
          title="Valor y calidad más allá de la tecnología"
          descripcion="Diseñamos soluciones efectivas basando todo nuestro proceso en la evidencia de los datos para optimizar la toma de decisiones.

          Realizamos investigaciones con usuarios finales, ejecutamos pruebas de usabilidad, analizamos métricas y examinamos mapas de calor."
        />


        <br />

        <FlipCard />

        <br />
        <div className="container1">

          <div className="col-md-6">
            <br />
            <br />
            <br />
            <br />
            <div className="col-md-12">
              <h6 className="text-center">  La implementación de Puentes Digitales
                consta de un Portal Web de E-commerce que permita gestionar y comercializar toda la gama de productos que nuestro cliente (proveedor) ofrece.
              </h6>
              <br />
              <p className="text-center">   Creamos Tiendas Online con todo lo que una empresa necesita: control de stock, envíos, categorías de productos, todos los medios de pago y un diseño personalizado.</p>
            </div>
            <h1 className="text-center" style={{
              color: "#000000",
              fontWeight: "bold",
              marginTop: "50px",
              marginBottom: "50px",
              fontFamily: "sans-serif",
              textShadow: "1px 1px 10px #7DB0DD",
              textTransform: "uppercase",
              letterSpacing: "2px",
              lineHeight: "1.2",
              textAlign: "center",
            }} >Implementación</h1>
          </div>

          <div className="col-md-4">
            <div className="imgecomerce" />
            <h3 className="text-left">Carecteristicas</h3>
          </div>
        </div>


        <TimeLineComponent />

        <Testimonial />


      </>

    )
  }
}
