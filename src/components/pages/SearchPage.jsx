import React, { useState } from 'react'
import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { Header } from '../layout/Header';
import { useParams } from 'react-router-dom';

export const SearchPage = () => {

  const { query, category } = useParams();

  let itemsUrl = 'https://dummyjson.com/products?limit=10&skip=10';

  itemsUrl = query ? `https://dummyjson.com/products/search?q=${query}` : itemsUrl;

  itemsUrl = category ? `https://dummyjson.com/products/category/${query}` : itemsUrl;

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
