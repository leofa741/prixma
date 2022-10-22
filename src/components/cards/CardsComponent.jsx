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

            <Grid item xs={12} sm={6} md={4} lg={3}
            >
                <Card sx={{ maxWidth: 345 }}
                    className="card"
                >
                    <CardActionArea
                    >
                        <CardMedia
                            className="card-img">

                            <CardContent
                                className="card-body">
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontWeight="bold"
                                    fontSize="1.3rem"
                                >
                                    Involucrar a clientes y usuarios
                                </Typography>
                                <GroupAddIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '3.3rem'
                                    }}   />
                                <Typography variant="body2"
                                    className="card-text">
                                    <p>Enfocamos nuestros esfuerzos en involucrar a nuestros clientes y usuarios en el desarrollo de nuestros proyectos, para que puedan aportar sus ideas y sugerencias, y así poder ofrecerles un producto final que cumpla con sus expectativas.</p>
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
                            <CardContent
                                className="card-body">
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontWeight="bold"
                                    fontSize="1.3rem"
                                >
                                    Negocio y Producto Innovadores
                                </Typography>
                                <TipsAndUpdatesIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '3.3rem'
                                    }}  />
                                <Typography variant="body2"
                                    className="card-text">
                                    Los productos innovadores son productos diseñados para estimular las ventas y a la vez generar una mayor tasa de recompra.

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
                                className="card-body">
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontWeight="bold"
                                    fontSize="1.3rem"
                                >
                                    Optimización de aplicaciones e infraestructura de operaciones
                                </Typography>

                                <MiscellaneousServicesIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '3.3rem'
                                    }}
                                />
                                <Typography variant="body2"
                                    className="card-text">
                                        Innovamos con nuevos marcos y filosofías de trabajo que logran
un mejor desarrollo de aplicaciones en menor tiempo y a menor costo.
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
                                className="card-body">
                                <Typography gutterBottom variant="h2" component="div"
                                    sx={{ color: 'black' }}
                                    fontWeight="bold"
                                    fontSize="1.3rem"
                                >
                                    Empoderar a los empleados
                                </Typography>
                                <PersonAddAltIcon
                                    sx={{
                                        color: 'black',
                                        fontWeight: 'bold',
                                        fontSize: '3.3rem'
                                    }}
                                />
                                <Typography variant="body2"
                                    className="card-text">
                                </Typography>
                            </CardContent>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>

    );
}
