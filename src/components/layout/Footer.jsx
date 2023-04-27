import React from 'react'
import { Container, Stack } from 'react-bootstrap'
import { CategoriesList } from './CategoriesList'

export const Footer = () => {
    return (
        <Container className='footer bg-light p-4 mt-5'>
            <Stack direction='horizontal' className='d-flex flex-wrap justify-content-center' gap={2}>
                <CategoriesList />
            </Stack>
        </Container>
    )
}
