import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SearchInput = () => {

    const refQueryInput = useRef();
    const [query, setQuery] = useState('');
    const navigate = useNavigate();


    const handleWriteSearch = () => {
        setQuery(refQueryInput.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (query === '') return true;

        navigate(`/search?query=${query}`);
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
            <input className="form-control me-2" type="search" placeholder="Search" value={query} ref={refQueryInput} onChange={handleWriteSearch} />
            <button type='submit' className={`btn btn-primary ${query === "" ? "disabled" : ""}`} to={`/search?query=${query}`}>Search</button>
        </form>
    )
}
