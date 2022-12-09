import React from 'react'
import Loader from '../../components/Loader';
import ListOfMovies from '../../components/ListOfMovies';
import Grid from '@mui/material/Grid';
import { useMovies } from '../../hooks/useMovies';

export default function SearchResults() {

    const {loading, listMovies} = useMovies()

    return (
        <div>
            <ListOfMovies listMovies={listMovies} />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {loading && <Loader />}
            </Grid>
        </div>
    )
}