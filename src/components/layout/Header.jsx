import React from 'react'
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>My Shop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <SearchInput />
            </div>
        </nav>
    )
}
