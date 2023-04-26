import React, { useEffect, useState } from 'react'
import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { Header } from '../layout/Header';
import { useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
  const [params, setParams] = useSearchParams();

  const category = params.get('category') ?? '';
  const query = params.get('query') ?? '';
  const page = parseInt(params.get('page') ?? 1);

  let itemsUrl = 'https://dummyjson.com/products';
  itemsUrl += (query !== '') ? `/search?q=${query}&limit=9&skip=${(page - 1) * 9}` : '';
  itemsUrl += (category !== '') ? `/category/${category}?limit=9&skip=${(page - 1) * 9}` : '';

  const data = useFetch(itemsUrl);

  return (
    <>
      <Header />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-2">

          </div>
          <div className="col-md-8">
            <Items data={data} />
          </div>
          <div className="col-md-2">
            <p>Your cart is empty.</p>
          </div>
        </div>
      </div>
    </>
  )
}
