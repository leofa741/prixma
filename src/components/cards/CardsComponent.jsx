import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './cardscomponent.css'

export default function ActionAreaCard() {
  return (
 <Grid 
    container   
    spacing={2}
      direction="row"
        justifyContent="center"
        alignItems="center"
        className="cards-container">

    <Grid item xs={12} sm={6} md={4} lg={3} 
    >
        <Card sx={{ maxWidth: 345 }}
        className="card"
        >
             <CardActionArea
               
             >
                      <CardMedia
                          className="card-img">
                          <btn className=" card-img-btn  btn  btn-block">Diseño Web</btn>
                          <CardContent
                              className="card-body">
                              <Typography gutterBottom variant="h2" component="div">
                                  Lizard
                              </Typography>
                              <Typography
                                    variant="body2"
                                    className="card-text"  
                                    sx={{ fontSize: 10 }}

                                  >
                          
                             

                         

                                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                  across all continents except Antarctica
                              </Typography>
                          </CardContent>
                      </CardMedia>
                  </CardActionArea>
        </Card>

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} 
    >
        <Card sx={{ maxWidth: 345 }}
        className="card"
        >
             <CardActionArea>
                      <CardMedia
                          className="card-img">
                          <btn className=" card-img-btn  btn  btn-block">Diseño Web</btn>
                          <CardContent
                              className="card-body">
                              <Typography gutterBottom variant="h2" component="div">
                                  Lizard
                              </Typography>
                              <Typography variant="body2"
                                  className="card-text">

                                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                  across all continents except Antarctica
                              </Typography>
                          </CardContent>
                      </CardMedia>
                  </CardActionArea>
        </Card>

        </Grid>
 
        <Grid item xs={12} sm={6} md={4} lg={3} 
    >
        <Card sx={{ maxWidth: 345 }}
        className="card"
        >
             <CardActionArea>
                      <CardMedia
                          className="card-img">
                          <btn className=" card-img-btn  btn  btn-block">Diseño Web</btn>
                          <CardContent
                              className="card-body">
                              <Typography gutterBottom variant="h2" component="div">
                                  Lizard
                              </Typography>
                              <Typography variant="body2"
                                  className="card-text">

                                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                  across all continents except Antarctica
                              </Typography>
                          </CardContent>
                      </CardMedia>
                  </CardActionArea>
        </Card>

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} 
    >
        <Card sx={{ maxWidth: 345 }}
        className="card"
        >
             <CardActionArea>
                      <CardMedia
                          className="card-img">
                          <btn className=" card-img-btn  btn  btn-block">Diseño Web</btn>
                          <CardContent
                              className="card-body">
                              <Typography gutterBottom variant="h2" component="div">
                                  Lizard
                              </Typography>
                              <Typography variant="body2"
                                  className="card-text">

                                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                  across all continents except Antarctica
                              </Typography>
                          </CardContent>
                      </CardMedia>
                  </CardActionArea>
        </Card>

        </Grid>

        

    </Grid>

  );
}
