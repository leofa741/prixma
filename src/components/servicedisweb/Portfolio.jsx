import React from 'react'


export const Portfolio = ({title,descripcion}) => {
  return (
    <>
  <section className="portfolio" id="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="intro">
                        <div className="title">
                  
                        <h1
                            className="title__primary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            
                        >{title}</h1>
                        </div>
                        <p className="mx-auto title__secondary">
                        {descripcion}

                        </p>                       
                    </div>
                </div>
            </div>
        </div>       
    </section>

    </>
  )
}
