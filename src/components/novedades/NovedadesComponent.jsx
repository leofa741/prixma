import React from 'react'
import { Testimonial } from '../testimonial/Testimonial'

import './novedades.css'

export const NovedadesComponent = () => {




  return (
    <>
      <div className="novedades">
        <div className="novedades__container">
          <div className="novedades__container__title">
            <h2>Novedades</h2>
          </div>
          <div className="novedades__container__cards">
            <div className="novedades__container__cards__card">
              <div className="novedades__container__cards__card__img">
                <div className="novedades__container__cards__card__img__img">

                </div>



              </div>

              <div className="novedades__container__cards__card__text">
                <h3>
                  diseño de ecommerce
                </h3>
                <p>
                  Si estás buscando vender por internet, o transformar tu página web en una verdadera herramienta de ventas.
                  te ayudamos a diseñar tu tienda online.,
                </p>
              </div>
            </div>
          </div>
        </div>
         </div>



    






      <Testimonial />
    </>
  )
}
