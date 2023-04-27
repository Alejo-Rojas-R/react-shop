import React, { useLayoutEffect } from 'react'
import { Item } from './Item'
import { Container, Spinner, Row } from 'react-bootstrap';
import { ResultsPagination } from './ResultsPagination';

export const Items = ({ data }) => {

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
      <Row xs={1} md={2} lg={3} gap={2} className='g-0 item__list'>
        {products.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Row>

      {(data.data.total > 9) &&
        <ResultsPagination total={data.data.total} />
      }
    </>
  )
}
