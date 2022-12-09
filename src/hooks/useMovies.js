import React from 'react'
import { useGetMovies } from './useGetMovies';
import { useInfiniteScroll } from './useInfiniteScroll';

const PAGE_LIMIT = 1;

export function useMovies({ page, setPage }) {

    const getMovies = useGetMovies()
    const [listMovies, setListMovies] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        const movies = async () => {
            try {
                if (page <= PAGE_LIMIT) {
                    const data = await getMovies({ page }).then(movies => {
                        return movies.results
                    })
                    setListMovies((prev) => {
                        return [...prev, ...data]
                    })
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }
        movies()
    }, [getMovies, page])

    useInfiniteScroll({ setPage })

    return { loading, listMovies }
}