import React from 'react'
import { Banner } from '../banner/Banner'
import { Slider } from '../slider/Slider'
import { Testimonial } from '../testimonial/Testimonial'

export const ServicesComponent = () => {
  return (
    <>
    <Slider />
  <section id="services" class="text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="intro">
                     
                        <h1>¿Qué hacemos?</h1>

                      

                        <p class="mx-auto">

                        Nos especializamos en Outsourcing de Innovación y Transformación Digital para Transformar cualquier tipo de negocio mediante Procesos transversales a nuestras Prácticas

                        </p>
                    </div>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon1.png" alt=""/>
                        <h5>Digital Marketing</h5>
                        <p>
                        El marketing digital es una estrategia de marketing que utiliza Internet para promocionar un producto o servicio.
                        </p>

                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon2.png" alt=""/>
                        <h5>Logo Designing</h5>
                        <p>
                        El diseño de logotipos es un proceso creativo que requiere de una gran cantidad de tiempo y esfuerzo.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon3.png" alt=""/>
                        <h5>Buisness consulting</h5>
                        <p>
                        La consultoría empresarial es un servicio que ayuda a las empresas a mejorar su rendimiento y su competitividad.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon4.png" alt=""/>
                        <h5>servicios tecnicos</h5>
                        <p>
                       Son servicios  que se prestan a los clientes para ayudarles a resolver problemas con sus productos.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon5.png" alt=""/>
                        <h5>Brand Identity</h5>
                        <p>
                        La identidad de marca es el conjunto de elementos que definen la personalidad de una marca.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon6.png" alt=""/>
                        <h5>Grafica comercial</h5>
                        <p>
                        La gráfica comercial es un tipo de gráfica que se utiliza para la publicidad y el marketing.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon6.png" alt=""/>
                        <h5>Software a medida</h5>                              
                        <p>
                        El software a medida es un tipo de software que se desarrolla para satisfacer las necesidades específicas de un cliente.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon6.png" alt=""/>
                        <h5>Diaeño Web</h5>
                        <p>
                        El diseño web es el proceso de creación de sitios web. Este puede incluir el diseño, la programación y la publicación.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service">
                        <img src="img/icon6.png" alt=""/>
                        <h5> E Comerce</h5>
                        <p>
                        El  e-commerce, es la compra y venta de productos o servicios a través de Internet.
                        </p>
                        <a href="#" class="btn btn-dark  ">Leer más</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Banner />
    <Testimonial />

 

    </>
  )
}
