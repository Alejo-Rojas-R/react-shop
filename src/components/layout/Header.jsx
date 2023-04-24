import React from 'react'
import { NavLink } from 'react-router-dom';
import { SearchInput } from './SearchInput';

export const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MyShop</NavLink>
                <SearchInput />
            </div>
        </nav>
    )
}
