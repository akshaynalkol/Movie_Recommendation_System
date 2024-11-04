import React, { useEffect, useState } from 'react';
import { UPCOMING_MOVIES_API } from '../../Utils/Constant';
import axios from 'axios';

const Upcoming = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await axios.get(UPCOMING_MOVIES_API);
        console.log(res.data.results);
    }

    useEffect(() => {
        getData();
    });

    return (
        <>
            Upcoming Page
        </>
    )
}

export default Upcoming;