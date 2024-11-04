import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [inputVal, setInputVal] = useState('');
    const nav = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputVal) {
            nav(`/search?q=${inputVal}`);
        }
        setInputVal('');
    }

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-color1 navbar-dark shadow-lg sticky-top'>
                <div className='container'>
                    <NavLink to='/' className='navbar-brand'>
                        <h4 className='fw-bold'>MovieDb</h4>
                    </NavLink>
                    <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='nav'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'>
                                <NavLink to='/' className='nav-link'>Popular</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/topRated' className='nav-link'>Top Rated</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='/upcoming' className='nav-link'>Upcoming</NavLink>
                            </li>
                        </ul>
                        <form className='d-flex' onSubmit={(e) => handleSearch(e)}>
                            <input type='search' className='form-control me-2' placeholder='Search'
                                value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                            <button className='btn btn-secondary'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;