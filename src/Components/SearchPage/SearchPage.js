import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import Pagination from '../Pagination';
import { useSearchParams } from 'react-router-dom';
import { API_KEY } from '../../Utils/Constant';

const SearchPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const movie_name = searchParams.get('q');

    // Pagination
    const [page, setPage] = useState(1);
    const limit=20;
    const [totalPage, setTotalPage] = useState(1);


    const searchData = async () => {
        setLoading(true);
        const res = await axios.get
            (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${movie_name}`)
        // console.log(res.data.results);

        setLoading(false);
        setData(res.data.results);
        setTotalPage(res.data.total_pages);
    }

    useEffect(() => {
        searchData();
    }, [searchParams,page]);

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
                                    data && data.map((val, index) => {
                                        return (
                                            <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                                                <Card data={val} />
                                            </div>
                                        )
                                    })
                                }
                                <Pagination page={page} setPage={setPage} limit={limit} totalPage={totalPage} siblings={1} />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage;