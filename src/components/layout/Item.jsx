import React from 'react'

export const Item = ({ item }) => {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={item.thumbnail} className="card-img m-3" alt="Product Thumbnail" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text"><i className="bi bi-currency-dollar me-1"></i>{item.price}</p>
            <p className="card-text"><i className="bi bi-star-fill text-warning me-1"></i>{item.rating}</p>
            <button type="button" className="btn btn-primary me-1"><i className="bi bi-cart"></i></button>
            {/*<button type="button" className="btn btn-secondary me-1"><i className="bi bi-heart"></i></button>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
