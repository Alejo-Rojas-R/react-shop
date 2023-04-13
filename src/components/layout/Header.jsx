import React, { useRef, useState } from 'react'

export const Header = ({setSearch}) => {

    const refSearch = useRef();

    const searchAction = (e) => {
        e.preventDefault();
        
        setSearch(refSearch.current.value);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <form className="d-flex justify-content-center">
                        <input className="form-control me-2" type="search" placeholder="Search" ref={refSearch} />
                        <button className="btn btn-outline-success" type="submit" onClick={searchAction} >Search</button>
                    </form>
                </div>
            </nav>

        </>
    )
}
