import { Box, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../database/customfech';
import productos from '../../database/datadb';

import { CardContact } from './CardContact';

import './contact.css'
export const FormContact = (props) => {

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
              <p className="text-center"> {props.descripcion} </p>
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
        <div className="containercontact">
          <div className="">
        
              <div className="col-md-12">

                <CardContact
                  title="Contacto"
                  descripcion=" Si deseas recibir más información acerca de nuestras áreas de experticia y productos contacta con nosotros. Seguro podemos ofrecerte una solución."
                 />
             
            </div>
          </div>
        </div>
      </>
    )
  }
}
