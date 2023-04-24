import React from 'react'
import { RatingStars } from './RatingStars'

export const Item = ({ item }) => {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.thumbnail} className="card-img m-3 img-responsive" alt="Product Thumbnail" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
              <h5 className="card-title mb-0">{item.title}</h5>
              <button type="button" className="btn btn-primary ms-auto"><i className="bi bi-cart"></i></button>
              {/*<button type="button" className="btn btn-secondary me-1"><i className="bi bi-heart"></i></button>*/}
            </div>
            <p className="card-text mb-1"><i className="bi bi-currency-dollar me-1"></i>{item.price}</p>
            <p className="card-text mb-0"><RatingStars rating={item.rating}/></p>
          </div>
        </div>
      </div>
    </div>
  )
}
