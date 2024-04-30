import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card';
import Pagination from '../Pagination';
import { ALL_MOVIES_API } from '../../Utils/Constant';

const Popular = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    // Pagination  
    const [currPage, setCurrPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = data.slice(firstIndex, lastIndex);

    const getData = async () => {
        setLoading(true);
        const res = await axios.get(ALL_MOVIES_API);
        // console.log(res.data.results);

        setLoading(false);
        setData(res.data.results);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='bg-dark'>
            <div className='container'>
                <div className='row gy-3 pt-4'>
                    {
                        loading ?
                            <p className='text-center text-light mb-0' style={{ height: '86.5vh' }}>
                                <span className='spinner-border'></span>
                            </p> :
                            records && records.map((val, index) => {
                                return (
                                    <div className='col-lg-3 col-md-4 col-sm-6' key={index}>
                                        <Card data={val} />
                                    </div>
                                )
                            })
                    }
                </div>
                <Pagination data={data} currPage={currPage} setCurrPage={setCurrPage} recordsPerPage={recordsPerPage} />
            </div>
        </div>

    )
}

export default Popular
