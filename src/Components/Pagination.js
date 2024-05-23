import React from 'react';
import _ from 'lodash';
import './Pagination.css';

const Pagination = ({ page, setPage, limit, totalPage, siblings, }) => {

    const returnPaginationRange = (totalPage, page, limit, siblings) => {
        let totalPageNoInArray = 7 + siblings;
        if (totalPageNoInArray >= totalPage) {
            return _.range(1, totalPage + 1);
        }

        let leftSiblingsIndex = Math.max(page - siblings, 1);
        let showLeftDots = leftSiblingsIndex > 2;

        let rightSiblingsIndex = Math.min(page + siblings, totalPage);
        let showRightDots = rightSiblingsIndex < totalPage - 2;

        if (!showLeftDots && showRightDots) {
            let leftItemsCount = 3 + 2 * siblings;
            let leftRange = _.range(1, leftItemsCount + 1);
            return [...leftRange, " ...", totalPage];
        }
        else if (showLeftDots && !showRightDots) {
            let rightItemsCount = 3 + 2 * siblings;
            let rightRange = _.range(totalPage - rightItemsCount + 1, totalPage + 1);
            return [1, '... ', ...rightRange];
        }
        else {
            let middleRange = _.range(leftSiblingsIndex, rightSiblingsIndex + 1);
            return [1, "... ", ...middleRange, " ...", totalPage];
        }
    }
    
    const numbers = returnPaginationRange(totalPage, page, limit, siblings);

    const onPageChange = (val) => {
        if (val === '&laquo;' || val === "... ") {
            setPage(1);
        }
        else if (val === '&lsaquo;') {
            if (page !== 1) {
                setPage(page - 1)
            }
        }
        else if (val === '&raquo;' || val === " ...") {
            setPage(totalPage);
        }
        else if (val === '&rsaquo;') {
            if (page !== totalPage) {
                setPage(page + 1);
            }
        }
        else {
            setPage(val);
        }

    }

    return (
        <nav className='paddingBottom'>
            <ul className='pagination justify-content-end mt-3 mb-0'>
                <li className={`page-item ${page === 1 && 'disabled'}`}>
                    <a href="#" className='page-link rounded-start-2' onClick={() => onPageChange("&laquo;")}>&laquo;</a>
                </li>
                <li className={`page-item ${page === 1 && 'disabled'}`}>
                    <a href="#" className='page-link' onClick={() => onPageChange("&lsaquo;")}>&lsaquo;</a>
                </li>
                {
                    numbers.map((val, index) => {
                        return (
                            <li className={`page-item ${page === val ? 'active' : ""}`} key={index}>
                                <a href="#" className='page-link' onClick={() => onPageChange(val)}>
                                    {val}
                                </a>
                            </li>
                        )
                    })
                }
                <li className={`page-item ${page === totalPage && 'disabled'}`}>
                    <a href="#" className='page-link' onClick={() => onPageChange("&rsaquo;")}>&rsaquo;</a>
                </li>
                <li className={`page-item ${page === totalPage && 'disabled'}`}>
                    <a href="#" className='page-link rounded-end-2' onClick={() => onPageChange("&raquo;")}>&raquo;</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;