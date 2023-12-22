import React from 'react'
import './item.css';

import sistemas from '../../assets/img/sistemas1.png';
import arquitectura from '../../assets/img/arquitectura-100x100.png';
import devops from '../../assets/img/devops_icon.png';
import sistemasweb from '../../assets/img/icon_mobile.png';
import basededatos from '../../assets/img/basededatos.png';
import ecomerce from '../../assets/img/ecomerce.png';



export const CardPracticas = () => {
  return (
    <>

    <div className="containercard"> 

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={sistemas} alt="sistemas" />                             
                   <h3>software A Medida</h3>                
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p> Desarrollamos software a medida, para que tu empresa pueda crecer y adaptarse a los cambios del mercado.  </p>
                      
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={arquitectura} alt="arquitectura"  />                    
                   <h3>Arquitectura de software</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Brindamos servicios de consultoría en Arquitectura de Software en función de sus necesidades.  </p>
                       
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={devops} alt="devops"   />                    
                   <h3>DevOps</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Innovamos con nuevos marcos de trabajo que logran un desarrollo de aplicaciones en menor tiempo y a menor costo. </p>
                       
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={sistemasweb} alt="sistemasweb"/>                    
                 
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Desarrollamos aplicaciones web, aplicaciones móviles para android /IOS ,desarrollo de software a medida. </p>
                     
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={basededatos} alt="basededatos"   />                    
                   <h3>Base de datos</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Creamos y administramos bases de datos, para que su empresa pueda crecer y adaptarse a los cambios .  </p>
                      
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src={ecomerce} alt="ecomerce"   />                    
                 
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Diseño de tiendas online, con la mejor tecnología y experiencia de usuario. </p>
                    
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
