/* Categories List shown at the left of the page */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Container, Stack, Spinner } from 'react-bootstrap';

export const CategoriesList = ({ badges }) => {

    // Get categories to be shown as badges below the search input
    const { data, loading } = useFetch('https://dummyjson.com/products/categories');

    if (loading) {
        return (
            <Container className="d-flex align-items-center justify-content-center mt-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    return (
        data.map((item, index) => (
            <NavLink key={index} to={`/search?category=${item}`} className='link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>{item}</NavLink>
        ))
    );
}

