import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { customFetch } from "../../database/customfech";
import productos from "../../database/datadb";



export const PuentesDigitalesComponent =(props) => {
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
            
              <Box sx={{ width: "100%"      }}>
                <h5>Cargando... </h5> 
                <LinearProgress />
                <br></br>
              </Box>
              </div>
              </div>
            </div>
          );
      }
      
      else{
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="about-section">
              <div className="col-md-12">
                <h1 className="text-center">Conectamos tus Ideas Construyendo Puentes...</h1>

                <p className="text-center">
                  Comenzé alla por 2009 ,como respuesta a las necesidades del mercado haciendo diseño web para pequeños proyectos y luego extendiendome para 
                  pymes y grandes empresas,
                   con el paso del tiempo me fui especializando en el desarrollo de aplicaciones web y móviles,
                    y actualmente me dedico a la creación de soluciones tecnológicas a medida para empresas de todos los tamaños.
                  En aquellos años los sitios web diseñados eran básicamente sitios web estáticos y muy sencillos,
                  que cumplían con las exigencias del momento transcurrido.
                  Hoy en día, los sitios web son mucho más complejos y requieren de una gran cantidad de conocimientos y experiencia para poder desarrollarlos.

                                 
                </p>
                <p className="text-center">
                  Operamos en la zona sur de Buenos Aires.
                  Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio,
                  a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.
                </p>
                </div>
            </div>
          </div>
        </div>
      
      </section>
      
   

    </>
  )
}
}
