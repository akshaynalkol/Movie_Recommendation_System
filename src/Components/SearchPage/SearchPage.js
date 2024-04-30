import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import Pagination from '../Pagination';
import { useSearchParams } from 'react-router-dom';
import { MOVIE_SERACH_API } from '../../Utils/Constant';

const SearchPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const movie_name = searchParams.get('q');

    // Pagination
    const [currPage, setCurrPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);


    const searchData = async () => {
        setLoading(true);
        const res = await axios.get(MOVIE_SERACH_API + movie_name);
        // console.log(res.data.results);

        setLoading(false);
        setData(res.data.results);
    }

    useEffect(() => {
        searchData();
    }, [searchParams]);

    if (data.length === 0 && loading === false) {
        return <h5 className='text-center text-light bg-dark py-4 mb-0' style={{ height: '90.2vh' }}>
            Incorrect Input!
        </h5>;
    }

    return (
        <div className='bg-dark'>
            <div className='container'>
                <div className='row gy-3 pt-4'>
                    {
                        loading ?
                            <p className='text-center text-light mb-0' style={{ height: '86.5vh' }}>
                                <span className='spinner-border'></span>
                            </p> :
                            <>
                                {
                                    records && records.map((val, index) => {
                                        return (
                                            val.poster_path &&
                                            <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                                                <Card data={val} />
                                            </div>
                                        )
                                    })
                                }
                                < Pagination data={data} currPage={currPage} setCurrPage={setCurrPage} recordsPerPage={recordsPerPage} />
                            </>
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchPage;