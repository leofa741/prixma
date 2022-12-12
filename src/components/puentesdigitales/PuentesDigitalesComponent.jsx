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
                <h1 className="text-left"
                  style={{
                    color: "#FF7F27",
                    fontWeight: "bold",
                    fontSize: "5rem",
                    fontFamily: "Roboto",
                  }}
                >
                  HOLA!
                </h1>

                <h1 className="text-left"
                  style={{
                    color: "#FF7F27",
                    fontWeight: "bold",
                    fontSize: "5rem",
                    fontFamily: "Roboto",
                  }}
                >
                  _
                </h1>



                <p className="text-center"
                  style={{ color: "#000000", fontWeight: "bold", fontSize: "1rem" }}
                >
               Puentes Digitales es una empresa de desarrollo de software y diseño web.
               que se dedica a la creación de soluciones tecnológicas a medida para empresas de todos los tamaños.

               Puentes Digitales posee aliados estratégicos que nos permiten ofrecer soluciones integrales a nuestros clientes.

                                 
                </p>
                <p className="text-center"
                  style={{ color: "#404040", fontWeight: "bold", fontSize: "0.8rem" }}
                >
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
