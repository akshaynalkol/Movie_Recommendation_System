import React from 'react'
import { useParams } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import MovieCastDetails from './MovieCastDetails';

const MoviePage = () => {
    const { id } = useParams();

    return (
        <div className='container-fluid pt-4 bg-dark'>
            <MovieDetails id={id} />
            <MovieCastDetails id={id}/>
        </div>
    )
}

export default MoviePage;