import React from 'react'
import { RatingStars } from './RatingStars'
import { NavLink } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap';

export const Item = ({ item }) => {

  return (
    <Card>
      <Card.Img variant='top' className='cover' src={item.thumbnail} alt='Product Image' />
      <Card.Body>
        <Card.Title><NavLink to={`/product/${item.id}`}>{item.title}</NavLink></Card.Title>
        <Row>
          <Col>
            <Card.Text>${item.price}</Card.Text>
          </Col>
          <Col>
            <div className='d-flex align-items-center justify-content-end'>
              <RatingStars rating={item.rating} showRating={false} />
            </div>
          </Col>
        </Row>
        <Card.Text className='text-truncate'>
          {item.description}
        </Card.Text>
        <Button variant='primary' className='me-2'>
          Add to Cart <i className='bi bi-cart-plus'></i>
        </Button>
        <Button variant='secondary'>
          Save to Profile <i className='bi bi-heart'></i>
        </Button>
      </Card.Body>
    </Card>
  )
}
