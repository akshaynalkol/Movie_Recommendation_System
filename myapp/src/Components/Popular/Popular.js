import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_MOVIES_API } from '../../Utils/Constant';

const Popular = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(ALL_MOVIES_API);
        console.log(res);
        console.log(res.data.results);
    }

    useEffect(() => {
        getData();
    });

    return (
        <>
            Popular Page
        </>
    )
}

export default Popular;