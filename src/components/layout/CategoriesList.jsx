/* Categories List shown at the left of the page */
import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Container, Spinner, NavDropdown } from 'react-bootstrap';
import { NormalizeTitle } from '../../helpers/GeneralUseFunctions';

export const CategoriesList = ({ variant }) => {

    // Get categories to be shown as badges below the search input
    const { data, loading } = useFetch('https://dummyjson.com/products/categories');

    const [params] = useSearchParams();
    const category = params.get('category') ?? '';

    let links = '';

    if (loading) {
        return (
            <Container className="d-flex align-items-center justify-content-center mt-5">
                <Spinner animation="border" />
            </Container>
        );
    }

    switch (variant) {
        case 'dropdown':
            links = data.sort().map((item, index) => (
                <NavDropdown.Item
                    key={index}
                    as={NavLink}
                    to={`/search?category=${item}`}
                    className={`text-dark link-underline link-underline-opacity-0 bg-dark-hover ${(category === item) ? 'bg-info' : 'bg-white'}`}>

                    {NormalizeTitle(item)}
                </NavDropdown.Item>
            ))
            break;
        default:
            links = data.sort().map((item, index) => (
                <NavLink key={index} to={`/search?category=${item}`} className='text-dark link-underline link-underline-opacity-0 link-underline-opacity-50-hover'>
                    {NormalizeTitle(item)}
                </NavLink>
            ));
            break;
    }

    return (links);
}

