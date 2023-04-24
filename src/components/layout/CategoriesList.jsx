/* Categories List shown at the left of the page */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const CategoriesList = () => {

    const { data } = useFetch('https://dummyjson.com/products/categories');

    return (
        <>
            {data.map((item, index) => {
                return <NavLink key={index} to={`search/category/${item}`} className="list-group-item">{item}</NavLink>
            })}
        </>
    )
}
