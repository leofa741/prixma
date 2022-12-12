import { Box, LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { customFetch } from "../../database/customfech";
import productos from "../../database/datadb";

import './puentesdigitales.css'



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
      	<section id="about" class="about">
			<div class="container">
				<div class="row">
					<div class="col-xl-6 col-lg-12">
						<div class="single-about-txt">
							<h2
                class="wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                
              >HOLA!</h2>
              <h2>__</h2>
							<p>
								<span>p</span>uentes Digitales es una empresa de desarrollo de software y diseño web. que se dedica a la creación de soluciones tecnológicas a medida para empresas de todos los tamaños. Puentes Digitales posee aliados estratégicos que nos permiten ofrecer soluciones integrales a nuestros clientes.
							</p>
							<p>
							Operamos en la zona sur de Buenos Aires. Nuestro objetivo es ayudar a nuestros clientes a alcanzar sus objetivos de negocio, a través de la implementación de soluciones tecnológicas que les permitan mejorar su productividad y competitividad.</p>
							
						</div>
					</div>
				</div>
			</div>
			<div class="about-overlay">
				<img src="https://github.com/leofa741/prixma/blob/master/src/assets/img/description-1.png?raw=true" alt="images"/>
			</div>
		</section>

    </>
  )
}
}
