import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovieModal from '../MovieModal';


export default function MovieCard({ id, title, poster, overview }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const viewMovie = () => {
        navigate(`/movie/${id}`, { state: { id: id, title: title, poster: poster, overview: overview } });
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={`https://image.tmdb.org/t/p/w500/${poster}`}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="subtitle2" component="div">
                    {title}
                </Typography>
                <Typography sx={{
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                }} variant="body2" color="text.secondary">
                    {overview}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" type="button" onClick={() => viewMovie()}>View</Button>
                <Button size="small" type="button" onClick={handleOpen}>Open Modal</Button>
                <MovieModal
                    open={open}
                    handleClose={handleClose}
                    id={id}
                    title={title}
                    overview={overview}
                    poster={poster} />
            </CardActions>
        </Card>
    );
}