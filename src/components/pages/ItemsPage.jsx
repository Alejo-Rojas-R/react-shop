import React, { useState } from 'react'
import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { Categories } from '../layout/Categories';
import { Header } from '../layout/Header';

export const ItemsPage = () => {

  const [search, setSearch] = useState('');
  
  const itemsUrl = (search) ? `https://dummyjson.com/products?search?q=${search}` : 'https://dummyjson.com/products?limit=10&skip=10';

  const data = useFetch(itemsUrl);
  console.log(data)
  const categories = useFetch('https://dummyjson.com/products/categories');

  return (
    <>
      <Header setSearch={setSearch} />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-3">

            <Categories data={categories} />
          </div>
          <div className="col-md-6">

            <Items data={data} />
          </div>
          <div className="col-md-3">

            <p>Your cart is empty.</p>
          </div>
        </div>
      </div>
    </>
  )
}
