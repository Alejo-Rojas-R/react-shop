import React from 'react'
import { Item } from './Item'

export const Items = ({ data }) => {

  const { products } = data.data;

  return (
    <>
      {
        data.loading ?
          <div>Loading...</div>
          :
          <div>
            {
              products.map((item) => {
                return (
                  <Item key={item.id} item={item} />
                )
              })
            }
          </div>
      }
    </>
  )
}
