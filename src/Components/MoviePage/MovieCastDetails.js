import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from '../Pagination';
import { API_KEY } from '../../Utils/Constant';
import Profile from '../../Image/Profile.webp';

const MovieCastDetails = ({ id }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [currPage, setCurrPage] = useState(1);
    const recordsPerPage = 12;
    const lastIndex = currPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        // console.log(res.data.cast);

        setLoading(false);
        setData(res.data.cast);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h3 className='fw-bold text-white mb-0'>Cast :</h3>
            <div className='row'>
                {
                    records &&
                    records.map((val, index) => {
                        return (
                            <div className='col-xl-2 col-md-3 col-sm-4 col-6 gy-3 text-white' key={index}>
                                <img src={val.profile_path ? 'https://image.tmdb.org/t/p/w500/' + val.profile_path : Profile}
                                    height={260} className='w-100' alt="Profile" />
                                <p className='mb-0'>{val.name}</p>
                                <p className='mb-0'>Character : {val.character}</p>
                            </div>
                        )
                    })
                }
                {
                    !loading &&
                    <Pagination data={data} currPage={currPage} setCurrPage={setCurrPage} recordsPerPage={recordsPerPage} />
                }

            </div>
        </>
    )
}

export default MovieCastDetails;
