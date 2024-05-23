import React from 'react';
import { NavLink } from 'react-router-dom';
import NoImage from '../Image/NoImage.avif';

const Card = ({ data }) => {
    return (
        <>
            <NavLink to={`/moviePage/${data.id}`} className="text-decoration-none">
                <div className='card h-100 border-0 bg-dark text-light'>
                    {
                        data.poster_path ?
                        <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className='card-img' height={350} alt="Movie Poster" />:
                        <img src={NoImage} className='card-img' height={350} alt="Movie Poster" />
                    }
                    
                    <div className='card-body text-center pt-2'>  
                        <h6 className='card-title'>{data.title}</h6>
                        <p className='card-text'>Rating : {Math.round(data.vote_average * 10) / 10}</p>
                    </div>
                </div>    
            </NavLink>
        </>
    )
}

export default Card;