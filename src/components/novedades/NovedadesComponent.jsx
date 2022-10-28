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



        <div className="novedades">

        <div className="novedades__container">
          <div className="novedades__container__title1">
            <h2>App Android IOS</h2>
          </div>
          <div className="novedades__container__cards">
            <div className="novedades__container__cards__card">
              <div className="novedades__container__cards__card__img1">
                <div className="novedades__container__cards__card__img__img1">
                </div>
              </div>
              <div className="novedades__container__cards__card__text1">
                <h3>
                  E-commerce
                </h3>
                <p>
                  Desde cualquier lugar, con cualquier dispositivo y a toda hora se pueden visitar las góndolas virtuales y elegir el producto que necesita agregandolo a su carrito de compras personalizado.
                  El proveedor puede conocer las ventas en tiempo real y tener reportes.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>






      <Testimonial />
    </>
  )
}
