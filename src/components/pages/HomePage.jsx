import React, { useState } from 'react'
import { CategoriesList } from '../layout/CategoriesList';
import { SearchInput } from '../layout/SearchInput';
import { Accordion, Container, Image } from 'react-bootstrap';

export const HomePage = () => {

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center vh-100 position-relative'>
            <h1 className='text-center mb-5'>MyShop</h1>
            <Image fluid src='src/assets/shopping-basket-blue-clipart-md.png' className='img__cart position-absolute z-n1 w-25' alt='background image' />
            <SearchInput />
            <Accordion className='w-50 mt-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Categories</Accordion.Header>
                    <Accordion.Body><CategoriesList direction={'horizontal'} /></Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </Container>
    )
}
