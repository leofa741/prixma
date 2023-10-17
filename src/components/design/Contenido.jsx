import React from 'react'

export const Contenido = () => {
    return (
        <>
            <div className="container">
                <br />

                <div className="row ">
                    <div className="col-lg-6 " >
                        <div className="img-border">
                            <div className="img-border-graf" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="text-center">
                            <h1 className="display-3 fw-bold">Diseño</h1>
                            <div className="heading-line mb-1"></div>
                            <p className="lead mb-5">
                                Diseño de logos, carteles, vinilos, banners, etc.
                            </p>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Corporeos</h5>
                                        <p className="card-text">
                                            Carteles Comerciales Interior-exterio en polyfan para publicidad de negocios, oficinas, etc.
                                        </p>  <a href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios" className="btn btn-primary">Solicitar</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Vinilos
                                        </h5>
                                        <p className="card-text">
                                            Vinilos decorativos para paredes, puertas, ventanas, autos, etc.
                                        </p>  <a href="https://wa.me/+5491136038167?text=Hola%20me%20gustaria%20saber%20mas%20sobre%20sus%20servicios" className="btn btn-primary">Solicitar</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
