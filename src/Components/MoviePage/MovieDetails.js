import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../Utils/Constant';
import axios from 'axios';
import './MovieDetails.css';

const MovieDetails = ({ id }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        // console.log(res.data);

        setLoading(false);
        setData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    if (loading === true) {
        return <p className='text-center text-light'><span className='spinner-border'></span></p>
    }

    return (
        <div className='row bg-dark text-light rounded mx-lg-5 mx-2 mb-4'>
            <div className='col-lg-6 py-3 bg-color2'>
                <div className='d-flex align-items-sm-center mb-2'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Movie Poster" height={160} />
                    <div className="ms-2">
                        <h3 className='fw-bold'>{data.title}</h3>
                        <h6 className='text-primary mb-sm-3'>Rating : {Math.round(data.vote_average * 10) / 10}</h6>
                        <span className='badge border border-white rounded-1 p-1 me-2'>
                            {data.runtime} min
                        </span>
                        <span>
                            {
                                data.genres &&
                                data.genres.map((val, index) => {
                                    if (index === data.genres.length - 1) {
                                        return val.name;
                                    }
                                    return val.name + ", ";
                                })
                            }
                        </span>
                        <p className='mt-sm-2 mb-0'>Release Date : {new Date(data.release_date).toDateString()}</p>
                    </div>
                </div>
                <h4 className='fw-bold mb-1'>Overview : </h4>
                <p className='mb-0 small'>{data.overview}</p>
            </div>
            <div className='col-lg-6 px-0'>
                <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="Movie Poster"
                    className='w-100 h-100 rounded-end' />
            </div>
        </div>
    )
}

export default MovieDetails;