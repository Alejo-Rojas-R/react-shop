import React, { useState } from 'react'
import { CategoriesList } from '../layout/CategoriesList';
import { SearchInput } from '../layout/SearchInput';
import { Container, Image } from 'react-bootstrap';

export const HomePage = () => {

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center vh-100 position-relative'>
            <h1 className='text-center mb-5'>MyShop</h1>
            <Image fluid src='src\assets\shopping-basket-blue-clipart-md.png' className='position-absolute opacity-50 z-n1 w-50' alt='background image' />
            <SearchInput />
            <CategoriesList />
        </Container>
    )
}
