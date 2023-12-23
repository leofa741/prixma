import React from 'react'
import './contactcardpres.css'
import iconetelefone from '../../assets/img/icone-telefone.png';
import emailicon from '../../assets/img/email-icon.png';
import whatsapp from '../../assets/img/whatsapp.png';
export const ContactCardPres = (props) => {
    return (
        <>
            {/* <div className='containercard'>
                <div className="card">
                    <div className="face face11">
                        <div className="content">
                            <img src={whatsapp} alt="sistemas" />
                            <h3>Contáctanos</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p> Solicita info mediante el <br />
                                <i className="fa-brands fa-whatsapp"></i>
                                11-3603-8167<br />
                                para más información.
                            </p>

                        </div>
                    </div>
                </div>


                <div className="card">
                    <div className="face face11">
                        <div className="content">
                            <img src={emailicon} alt="sistemas" />
                            <h3>Contáctanos</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p> Solicita info mediante<br />
                                <i className="fa-solid fa-envelope"></i>
                                <span>infoplataformaweb@gmail.com</span> <br />
                                para más información.
                            </p>

                        </div>
                    </div>
                </div> */}


            <section id="contact">

                <h1 className="section-header">Preguntas?</h1>
                <div className="contact-wrapper">


                    <div className="direct-contact-container">

                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Buenos Aires, Argentina</span></i></li>

                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:11-3603-8167" title="Give me a call">(011) 3603-8167</a></span></i></li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:infoplataformaweb@gmail.com" title="Send me an email">infoplataformaweb@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <ul className="social-media-list">
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-mobile-phone" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-envelope" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <hr />


                    </div>

                    <div className='containercard2'>


                        <div className="card">
                            <div className="face face11">
                                <div className="content">
                                    <img src={whatsapp} alt="sistemas" />
                                    <h3>Contáctanos</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p> Solicita info mediante el <br />
                                        <i className="fa-brands fa-whatsapp"></i>
                                        11-3603-8167<br />
                                        para más información.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="face face11">
                                <div className="content">
                                    <img src={emailicon} alt="sistemas" />
                                    <h3>Contáctanos</h3>
                                </div>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <p> Solicita info mediante<br />
                                        <i className="fa-solid fa-envelope"></i>
                                        <span>infoplataformaweb@gmail.com</span> <br />
                                        para más información.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}
