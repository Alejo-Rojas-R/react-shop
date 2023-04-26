import React, { useLayoutEffect } from 'react'
import { Item } from './Item'
import { Container, Spinner, Row } from 'react-bootstrap';
import { ResultsPagination } from './ResultsPagination';

export const Items = ({ data, total }) => {

  const { products } = data.data;

  // Loading spinner
  if (data.loading === true) {
    return (
      <Container className="d-flex align-items-center justify-content-center vh-100">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <>
      <Row xs={1} md={2} lg={3} gap={2} className='g-0'>
        {products.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Row>

      <ResultsPagination total={data.data.total} />
    </>
  )
}
