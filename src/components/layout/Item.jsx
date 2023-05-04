import React from 'react'
import { RatingStars } from './RatingStars'
import { NavLink } from 'react-router-dom'
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';


export const Item = ({ item }) => {

  const handleToCart = (e) => {
    e.preventDefault()
  }

  const handleLike = (e) => {
    e.preventDefault()
  }

  const formatUSD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  const appliedDiscount = item.price - (item.price * (item.discountPercentage / 100));

  return (
    <Card className='p-2 border-0'>
      <Card className='item__item'>
        <NavLink to={`/product/${item.id}`} className='text-decoration-none link-dark'>
          <Card.Header className='p-0 position-relative'>
            <Card.Text as='h4' className='m-0 ms-3 mt-3 item__price position-absolute'><Badge bg='success'>{formatUSD.format(appliedDiscount)}</Badge></Card.Text>
            <Card.Img variant='top' className='cover' src={item.thumbnail} alt='Product Image' />
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>

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
