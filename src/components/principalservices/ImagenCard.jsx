import { Box, LinearProgress } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { customFetch } from '../../database/customfech';

export const ImagenCard = ({url}) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        
          customFetch(2000, 'imagen').then((data) => setItems(data));
         }, []);

        if (items.length === 0) {
            return (                     
              
                <Box sx={{ width: "100%"      }}>
                  <h5>Cargando...   <LinearProgress /></h5>                 
                
                </Box>            
            );
        }
        
        else{
    
  return (
    <img className="img-fluid" src={url} alt="alternative" />
  )
}

}
