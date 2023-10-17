import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

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

            <Grid item xs={12} sm={6} md={4} lg={3} >
                <Card sx={{ maxWidth: 345 }} className="card"  >
                    <CardActionArea  sx={{ backgroundColor: '#000000' }}  >
                        <CardMedia  className="card-img">
                            <CardContent>
                                <Typography gutterBottom variant="h2" component="h2" sx={{ color: 'black' }}fontSize="1rem" />                                  
                             
                                <GroupAddIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '2.3rem'
                                    }}   />
                                <Typography gutterBottom  variant="h3" component="h3"
                                    sx={{ color: 'black' ,
                                  
                                }}                                   
                                    fontSize="1.2rem">
                                     Involucrar a clientes y usuarios.
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
                    <CardActionArea >
                        <CardMedia
                            className="card-img1">
                            <CardContent>
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontSize="1rem"
                                >
                                   
                                </Typography>
                                <TipsAndUpdatesIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '2.3rem'
                                    }}  />
                                 <Typography gutterBottom  variant="h3" component="h3"
                                    sx={{ color: 'black' ,
                                  
                                }}
                                   
                                    fontSize="1.2rem">
                               Nuevas ideas y soluciones.
                                </Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}
            >
                <Card sx={{ maxWidth: 345 }}
                    className="card"  >
                    <CardActionArea >
                        <CardMedia
                            className="card-img2">
                            <CardContent
                                >
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontSize="1rem"
                                >
                                  
                                </Typography>

                                <MiscellaneousServicesIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '2.3rem'
                                    }}
                                />
                                <Typography gutterBottom  variant="h3" component="h3"
                                    sx={{ color: 'black' ,
                                  
                                }}
                                   
                                    fontSize="1.2rem">
                                 Mejorar la experiencia de los usuarios.
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
                    <CardActionArea
                    >
                        <CardMedia
                            className="card-img3">

                            <CardContent
                               >
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontSize="1rem"
                                >
                                    
                                </Typography>
                                <PersonAddAltIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '2.3rem'
                                    }}
                                />
                                 <Typography gutterBottom  variant="h3" component="h3"
                                    sx={{ color: 'black' ,
                                  
                                }}
                                   
                                    fontSize="1.2rem">
                                    Aumentar la participación de los usuarios.
                                </Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

    );
}
