import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>       
    )
}

export default Main;