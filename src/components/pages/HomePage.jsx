import React, { useState } from 'react'
import { CategoriesList } from '../layout/CategoriesList';
import { SearchInput } from '../layout/SearchInput';
import { Stack, Container, Image } from 'react-bootstrap';

export const HomePage = () => {

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center vh-100 position-relative'>
            <h1 className='text-center mb-5'>MyShop</h1>
            <Image fluid src='/assets/shopping-basket-blue-clipart-md.png' className='img__cart position-absolute z-n1 w-25' alt='background image' />
            <SearchInput />
            <Container className='mt-4'>
                <Stack direction='horizontal' className='d-flex flex-wrap justify-content-center' gap={2}>
                    <CategoriesList />
                </Stack>
            </Container>
        </Container>
    )
}
