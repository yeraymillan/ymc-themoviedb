import React from 'react'
import Loader from '../../components/Loader';
import ListOfMovies from '../../components/ListOfMovies';
import Grid from '@mui/material/Grid';
import { useMovies } from '../../hooks/useMovies';
import { useInfiniteScroll } from  '../../hooks/useInfiniteScroll';

export default function SearchResults() {

    const [page, setPage] = React.useState(1)
    const {loading, listMovies} = useMovies({ page, setPage })
    useInfiniteScroll({ setPage });

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