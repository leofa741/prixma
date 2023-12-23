import React from 'react'
import './contactcardpres.css'
import iconetelefone from '../../assets/img/icone-telefone.png';
import emailicon from '../../assets/img/email-icon.png';
import whatsapp from '../../assets/img/whatsapp.png';
import { IoCallOutline, IoMapSharp} from "react-icons/io5";


export const ContactCardPres = (props) => {
    return (
        <>
           


            <section id="contact">

                <h1 className="section-header">Preguntas?</h1>
                <div className="contact-wrapper">


                    <div className="direct-contact-container ">

                        <ul className="contact-list">
                            <li className="list-item">
                            <IoMapSharp className="fa fa-map-marker fa-2x" />
                              <span className="contact-text place">Buenos Aires, Argentina</span></li>

                            <li className="list-item">
                                <IoCallOutline   className="fa fa-phone fa-2x" />
                                <span className="contact-text phone"><a href="tel:11-3603-8167" title="Give me a call">(011) 3603-8167</a></span></li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:infoplataformaweb@gmail.com" title="Send me an email">infoplataformaweb@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <ul className="social-media-list">


                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-mobile-phone" aria-hidden="true"></i></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-envelope" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                        <hr />


                    </div>


                </div>
            </section>



        </>
    )
}
