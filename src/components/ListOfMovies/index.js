import React from 'react'
import MovieCard from '../MovieCard';
import './ListOfMovies.css'

const ListOfMovies = ({ listMovies }) => {
    return (
        <div>
            <ul className='moviesGrid'>
                {listMovies.map((item, index) =>
                    <li key={index}>
                        <MovieCard
                            id={item.id}
                            title={item.title}
                            overview={item.overview}
                            poster={item.backdrop_path}
                        />
                    </li>)}
            </ul>
        </div>
    )
}

export default ListOfMovies