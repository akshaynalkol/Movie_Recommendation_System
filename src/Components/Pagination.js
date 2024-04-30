import React from 'react';
import './Pagination.css';

const Pagination = ({ data, currPage, setCurrPage, recordsPerPage }) => {

    const nPage = Math.ceil(data.length / recordsPerPage);
    const numbers = [...Array(nPage + 1).keys()].slice(1);

    const prevPage = () => {
        if (currPage !== 1) {
            setCurrPage(currPage - 1);
        }
    }

    const changePage = (no) => {
        setCurrPage(no);
    }

    const nextPage = () => {
        if (currPage !== nPage) {
            setCurrPage(currPage + 1);
        }
    }

    return (
        <nav className='paddingBottom'>
            <ul className='pagination justify-content-end mt-3 mb-0'>
                <li className={`page-item ${currPage === 1 && 'disabled'}`}>
                    <a href="#" className='page-link rounded-start-2' onClick={() => prevPage()}>PREV</a>
                </li>
                {
                    numbers.map((val, index) => {
                        return (
                            <li className={`page-item ${currPage === val ? 'active' : ""}`} key={index}>
                                <a href="#" className='page-link' onClick={() => changePage(val)}>
                                    {val}
                                </a>
                            </li>
                        )
                    })
                }
                <li className={`page-item ${currPage === nPage && 'disabled'}`}>
                    <a href="#" className='page-link rounded-end-2' onClick={() => nextPage()}>NEXT</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination
