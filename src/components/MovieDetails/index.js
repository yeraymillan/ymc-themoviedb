import React from 'react'
import { useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function MovieDetails() {

    const location = useLocation();

    return (
        <Card sx={{ m: 2 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={`https://image.tmdb.org/t/p/w500/${location.state.poster}`}
                    alt={`${location.state.title}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {location.state.id} - {location.state.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {location.state.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

