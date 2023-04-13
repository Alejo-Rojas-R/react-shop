import React from 'react'
import { Items } from '../layout/Items'
import { useFetch } from '../../hooks/useFetch'
import { Categories } from '../layout/Categories';

export const ItemsPage = () => {

  const data = useFetch('https://dummyjson.com/products?limit=10&skip=10');
  const categories = useFetch('https://dummyjson.com/products/categories');

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h2>Categories</h2>
            <Categories data={categories} />
          </div>
          <div className="col-md-6">
            <h2>Products</h2>
            <Items data={data} />
          </div>
          <div className="col-md-3">
            <h2>Cart</h2>
            <p>Your cart is empty.</p>
          </div>
        </div>
      </div>
    </>
  )
}
