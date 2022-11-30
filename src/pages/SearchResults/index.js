import React from 'react'
import { getMovies } from '../../services/getMovies';
import Loader from '../../components/Loader';
import ListOfMovies from '../../components/ListOfMovies';
import Grid from '@mui/material/Grid';

const PAGE_NUMBER = 1;

export default function SearchResults() {

    const [listMovies, setListMovies] = React.useState([])
    const [page, setPage] = React.useState(PAGE_NUMBER)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const movies = async () => {
            try {
                const data = await getMovies({ page }).then(movies => {
                    return movies.results
                })
                setListMovies((prev) => {
                    return [...prev, ...data]
                })
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        movies()
    }, [page])

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setLoading(true);
            setPage((prev) => prev + 1);
        }
    }

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