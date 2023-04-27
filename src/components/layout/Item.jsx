import React from 'react'
import { RatingStars } from './RatingStars'
import { NavLink } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';


export const Item = ({ item }) => {

  const handleToCart = (e) => {
    e.preventDefault()
  }

  const handleLike = (e) => {
    e.preventDefault()
  }

  return (
    <Card className='p-2 border-0'>
      <Card className='item__item'>
        <NavLink to={`/product/${item.id}`} className='text-decoration-none link-dark'>
          <Card.Img variant='top' className='cover' src={item.thumbnail} alt='Product Image' />

          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Row>
              <Col>
                <i className='bi bi-cart-plus-fill text-primary me-1' onClick={handleToCart}></i>
                <i className='bi bi-heart-fill text-danger' onClick={handleLike}></i>
              </Col>
              <Col>
                <div className='d-flex align-items-center justify-content-end'>
                  <RatingStars rating={item.rating} showRating={false} />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </NavLink>
      </Card>
    </Card>
  )
}
