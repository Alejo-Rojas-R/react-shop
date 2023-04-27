import React from 'react'
import { Container } from 'react-bootstrap'
import { CategoriesList } from './CategoriesList'

export const Footer = () => {
  return (
    <Container className='footer bg-light p-4 mt-5'>
        <CategoriesList direction={'horizontal'} />
    </Container>
  )
}
