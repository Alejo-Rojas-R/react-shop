import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap';
import { NavLink, useSearchParams } from 'react-router-dom';

export const ResultsPagination = ({ total }) => {

    const [params, setParams] = useSearchParams();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const page = parseInt(params.get('page') ?? 1);
        setPage(page);
    }, [])

    const handleNumberClick = (e) => {
        const clickedPage = e.target.textContent;
        params.set('page', clickedPage);
        setParams(params);
        setPage(clickedPage);
    }

    const handleFirstClick = () => {
        params.delete('page');
        setParams(params);
        setPage(1);
    }

    const handlePrevClick = () => {
        const prevPage = page - 1;
        params.set('page', prevPage);
        setParams(params);
        setPage(prevPage);
    }

    const handleNextClick = () => {
        const nextPage = page + 1;
        params.set('page', nextPage);
        setParams(params);
        setPage(nextPage);
    }

    const handleLastClick = () => {
        const totalPages = Math.trunc(total / 9) + 1;
        params.set('page', totalPages);
        setParams(params);
        setPage(totalPages);
    }

    const paginationNumbers = [];
    for (let i = 1; i <= (total / 9) + 1; i++) {
        paginationNumbers.push(
            <Pagination.Item disabled={page == i ? true : false} className='pagination__number fw-semibold' key={i} active={page === i} onClick={handleNumberClick}>{i}</Pagination.Item>
        );
    }

    return (
        <Pagination className='d-flex justify-content-center py-5 gap-3'>
            <Pagination.First disabled={page == 1 ? true : false} onClick={handleFirstClick} className='pagination__control'><i className="bi bi-skip-backward-fill"/></Pagination.First>
            <Pagination.Prev disabled={page <= 1 ? true : false} onClick={handlePrevClick} className='pagination__control'><i className="bi bi-caret-left-fill"/></Pagination.Prev>

            {paginationNumbers}

            <Pagination.Next disabled={(page + 1) * 9 >= total ? true : false} onClick={handleNextClick} className='pagination__control'><i className="bi bi-caret-right-fill"/></Pagination.Next>
            <Pagination.Last disabled={(page + 1) * 9 >= total ? true : false} onClick={handleLastClick} className='pagination__control'><i className="bi bi-skip-forward-fill"/></Pagination.Last>
        </Pagination>
    );
}
