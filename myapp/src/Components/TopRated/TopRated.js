import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TopRated_MOVIES_API } from '../../Utils/Constant';

const TopRated = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(TopRated_MOVIES_API);
        console.log(res.data.results);
    }

    useEffect(() => {
        getData();
    });

    return (
        <>
            TopRated Page
        </>
    )
}

export default TopRated;