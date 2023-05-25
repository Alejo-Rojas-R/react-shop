import React, { useEffect, useState } from 'react'
import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { useSearchParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

export const SearchPage = () => {
  const [params] = useSearchParams();

  const category = params.get('category') ?? '';
  const query = params.get('query') ?? '';
  const page = parseInt(params.get('page') ?? 1);

  let itemsUrl = 'https://dummyjson.com/products';
  itemsUrl += (query !== '') ? `/search?q=${query}&limit=9&skip=${(page - 1) * 9}` : '';
  itemsUrl += (category !== '') ? `/category/${category}?limit=9&skip=${(page - 1) * 9}` : '';

  const data = useFetch(itemsUrl);

  return (
    <Container fluid='lg'>
      <Row>
        <Items data={data} />
      </Row>
    </Container>
  )
}
