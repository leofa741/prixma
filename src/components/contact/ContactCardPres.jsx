import React from 'react'
import './contactcardpres.css'
import iconetelefone from '../../assets/img/icone-telefone.png';
import emailicon from '../../assets/img/email-icon.png';
import whatsapp from '../../assets/img/whatsapp.png';
export const ContactCardPres = (props) => {
    return (
        <>
            <div className='containercard'>
                <div className="card">
                    <div className="face face1">
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
                    <div className="face face1">
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


                {/* <div className="card">
                    <div className="face face1">
                        <div className="content">
                            <img src={iconetelefone} alt="sistemas" />
                            <h3>Contáctanos</h3>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p> 
                                <i className="fa-solid fa-phone"></i>
                                11-3603-8167<br />
                                para más información.<c />
                                  </p>

                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
