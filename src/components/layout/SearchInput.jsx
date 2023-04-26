import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';

export const SearchInput = () => {

    const refQueryInput = useRef();
    const [query, setQuery] = useState('');

    const handleWriteSearch = () => {
        setQuery(refQueryInput.current.value);
    }

    return (
        <div className="d-flex justify-content-center">
            <input className="form-control me-2" type="search" placeholder="Search" ref={refQueryInput} onChange={handleWriteSearch} />
            <NavLink className={`btn btn-primary ${query === "" ? "disabled" : ""}`} to={`/search?query=${query}`}>Search</NavLink>
        </div>
    )
}
