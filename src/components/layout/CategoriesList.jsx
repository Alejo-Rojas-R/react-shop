/* Categories List shown at the left of the page */
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Badge, Container, Stack, Spinner } from 'react-bootstrap';

export const CategoriesList = () => {

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
        <Container className='w-75 pt-5'>
            <Stack direction='horizontal' className='d-flex flex-wrap justify-content-center' gap={2}>
                {data.map((item, index) => (
                    <Badge key={index} pill bg="light" text="black" className='shadow-sm p-2 bg-white rounded'>
                        <NavLink to={`search?category=${item}`} className='link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>{item}</NavLink>
                    </Badge>
                ))}
            </Stack>
        </Container>
    );
}
