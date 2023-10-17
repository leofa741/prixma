import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';
import { Box, LinearProgress } from '@mui/material';
import { CardContact } from '../contact/CardContact';

export const UxUiComponent = (props) => {

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
                <p className="text-center">Hola, somos Estudio de Diseño Puentes Digitales,Comunica de manera efectiva con una estrategia adaptada a todos los canales de Marketing</p>
              </div>
  
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
                <br></br>
              </Box>
            </div>
          </div>
        </div>
      );
    }
  
    else {

  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div className="containercontact">
   
          <div className="row">

            <CardContact
              title="UX/UI"
              descripcion="Nos estamos renovando, pronto estaremos de vuelta con más información."
             />
         
        
      </div>
    </div>
  </>
  )

}

}
