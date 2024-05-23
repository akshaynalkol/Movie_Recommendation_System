import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import Pagination from '../Pagination';
import { UPCOMING_MOVIES_API } from '../../Utils/Constant';

const Upcoming = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination
    const [page, setPage] = useState(1);
    const limit=20;
    const [totalPage, setTotalPage] = useState(1);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get(UPCOMING_MOVIES_API + page);
        // console.log(res.data.results);

        setLoading(false);
        setData(res.data.results);
        setTotalPage(res.data.total_pages);
    }

    useEffect(() => {
        getData();
    }, [page]);

    return (
        <div className='bg-dark'>
            <div className='container'>
                <div className='row gy-3 pt-4'>
                    {
                        loading ?
                            <p className='text-center text-light mb-0' style={{ height: '86.5vh' }}>
                                <span className='spinner-border'></span>
                            </p> :
                            data && data.map((val, index) => {
                                return (
                                    <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                                        <Card data={val} />
                                    </div>
                                )
                            })
                    }
                </div>
                <Pagination page={page} setPage={setPage} limit={limit} totalPage={totalPage} siblings={1} />
            </div>
        </div>
    )
}

export default Upcoming;